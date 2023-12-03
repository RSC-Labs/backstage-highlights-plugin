/*
 * Copyright 2023 RSC-Labs, https://rsoftcon.com/
 *
 * Licensed under the Mozilla Public License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.mozilla.org/en-US/MPL/2.0/
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { errorHandler, TokenManager, PluginEndpointDiscovery } from '@backstage/backend-common';
import { readGithubIntegrationConfig, readGitLabIntegrationConfig } from '@backstage/integration';
import { CatalogClient, CatalogApi } from '@backstage/catalog-client';
import { NotFoundError } from '@backstage/errors';
import * as express from "express";
import Router from 'express-promise-router';
import { Logger } from 'winston';
import { Config } from '@backstage/config';
import { fetchGithubBranches, fetchGitlabBranches } from '../lib/fetchBranches';
import { fetchGithubTags, fetchGitlabTags } from '../lib/fetchTags';
import { fetchGithubCommits, fetchGithubCommit, fetchGitlabCommits } from '../lib/fetchCommits';
import { Entity } from '@backstage/catalog-model';

type GithubConfig = {
  token?: string,
  apiBaseUrl?: string
}

type GitlabConfig = {
  token?: string,
  apiBaseUrl?: string
}

function getGithubConfigFromHighlights(config: Config): GithubConfig | undefined {
  const githubConfig = config.getOptionalConfig('highlights.github');
  if (githubConfig) {
    return {
      token: githubConfig.getOptionalString('token'),
      apiBaseUrl: githubConfig.getOptionalString('apiBaseUrl')
    }
  }
  return undefined;
}

function getGitlabConfigFromHighlights(config: Config, instance: string | undefined): GitlabConfig | undefined {
  try {
    const gitlabConfigs = config.getOptionalConfigArray('highlights.gitlab');
    if (gitlabConfigs && instance) {
      for (let i = 0; i < gitlabConfigs.length; i++) {
        if (gitlabConfigs[i].getOptionalString('host') && gitlabConfigs[i].getOptionalString('host') == instance) {
          return {
            token: gitlabConfigs[i].getOptionalString('token'),
            apiBaseUrl: gitlabConfigs[i].getOptionalString('apiBaseUrl')
          }
        }
      }
      return undefined;
    }
    if (gitlabConfigs && gitlabConfigs.length) {
      return {
        token: gitlabConfigs[0].getOptionalString('token'),
        apiBaseUrl: gitlabConfigs[0].getOptionalString('apiBaseUrl')
      }
    }
    return undefined;
 
  } catch {
    const gitlabConfig = config.getOptionalConfig('highlights.gitlab');
    if (gitlabConfig) {
      return {
        token: gitlabConfig.getOptionalString('token'),
        apiBaseUrl: gitlabConfig.getOptionalString('apiBaseUrl')
      }
    }
    return undefined;
  }
}

function getGithubConfig(config: Config): GithubConfig | undefined {
  if (getGithubConfigFromHighlights(config)) {
    return getGithubConfigFromHighlights(config);
  }
  const githubConfigArray = config.getOptionalConfigArray('integrations.github');
  if (githubConfigArray && githubConfigArray.length) {
    const integrationConfig = readGithubIntegrationConfig(githubConfigArray[0]);
    return {
      token: integrationConfig.token,
      apiBaseUrl: integrationConfig.apiBaseUrl
    }
  }
  return undefined;
}

function getGitlabConfig(config: Config, entity: Entity): GitlabConfig | undefined {

  const gitlabInstanceAnnotation: string | undefined = entity?.metadata.annotations?.['gitlab.com/instance'];

  if (getGitlabConfigFromHighlights(config, gitlabInstanceAnnotation)) {
    return getGitlabConfigFromHighlights(config, gitlabInstanceAnnotation);
  }
  const gitlabConfigArray = config.getOptionalConfigArray('integrations.gitlab'); 
  if (gitlabConfigArray && gitlabConfigArray.length) {
    if (gitlabInstanceAnnotation) {
      for (let i = 0; i < gitlabConfigArray.length; i++) {
        if (gitlabConfigArray[i].getOptionalString('host') && gitlabConfigArray[i].getOptionalString('host') == gitlabInstanceAnnotation) {
          return {
            token: gitlabConfigArray[i].getOptionalString('token'),
            apiBaseUrl: gitlabConfigArray[i].getOptionalString('apiBaseUrl')
          }
        }
      }
    }
    const integrationConfig = readGitLabIntegrationConfig(gitlabConfigArray[0]);
    return {
      token: integrationConfig.token,
      apiBaseUrl: integrationConfig.apiBaseUrl
    }
  }
  return undefined;
}

export interface RouterOptions {
  logger: Logger;
  tokenManager: TokenManager;
  discovery: PluginEndpointDiscovery,
  config: Config;
  catalogApi?: CatalogApi
}

export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger, tokenManager, discovery, config } = options;

  const catalogApi =
    options.catalogApi ?? new CatalogClient({ discoveryApi: discovery });
  
  const router = Router();
  router.use(express.json());

  router.get('/health', async () => {
    logger.info('PONG!');
  });

  router.get('/entity/:namespace/:kind/:name/fetchBranches', async (req, res) => {
    const token = await tokenManager.getToken();
    const { namespace, kind, name } = req.params;
    const entity = await catalogApi.getEntityByRef(
      { namespace, kind, name },
      token,
    );
    if (!entity) {
      throw new NotFoundError(
        `No ${kind} entity in ${namespace} named "${name}"`,
      );
    }

    const githubProject = entity?.metadata.annotations?.['github.com/project-slug'];

    if (githubProject) {
        const githubConfig = getGithubConfig(config);
        if (githubConfig && githubConfig.token) {
          const result = await fetchGithubBranches(githubProject, githubConfig.token, githubConfig.apiBaseUrl);
          return res.status(200).json({branches: result});
        }
    }

    const gitlabProject = entity?.metadata.annotations?.['gitlab.com/project-slug'];

    if (gitlabProject) {
      const gitlabConfig = getGitlabConfig(config, entity);
      if (gitlabConfig && gitlabConfig.token && gitlabConfig.apiBaseUrl) {
        const result = await fetchGitlabBranches(gitlabProject, gitlabConfig.token, gitlabConfig.apiBaseUrl);
        return res.status(200).json({branches: result});
      }
    }

    return res.status(500).json()
  });

  router.get('/entity/:namespace/:kind/:name/fetchTags', async (req, res) => {
    const token = await tokenManager.getToken();
    const { namespace, kind, name } = req.params;
    const entity = await catalogApi.getEntityByRef(
      { namespace, kind, name },
      token,
    );
    if (!entity) {
      throw new NotFoundError(
        `No ${kind} entity in ${namespace} named "${name}"`,
      );
    }

    const githubProject = entity?.metadata.annotations?.['github.com/project-slug'];

    if (githubProject) {
      const githubConfig = getGithubConfig(config);
      if (githubConfig && githubConfig.token) {
        const result = await fetchGithubTags(githubProject, githubConfig.token, githubConfig.apiBaseUrl);
        return res.status(200).json({tags: result});
      }
    }

    const gitlabProject = entity?.metadata.annotations?.['gitlab.com/project-slug'];

    if (gitlabProject) {
      const gitlabConfig = getGitlabConfig(config, entity);
      if (gitlabConfig && gitlabConfig.token && gitlabConfig.apiBaseUrl) {
        const result = await fetchGitlabTags(gitlabProject, gitlabConfig.token, gitlabConfig.apiBaseUrl);
        return res.status(200).json({tags: result});
      }
    }

    return res.status(500).json()
  });

  router.get('/entity/:namespace/:kind/:name/fetchCommits', async (req, res) => {

    const token = await tokenManager.getToken();
    const { namespace, kind, name } = req.params;
    const entity = await catalogApi.getEntityByRef(
      { namespace, kind, name },
      token,
    );
    if (!entity) {
      throw new NotFoundError(
        `No ${kind} entity in ${namespace} named "${name}"`,
      );
    }

    const githubProject = entity?.metadata.annotations?.['github.com/project-slug'];

    if (githubProject) {
      const githubConfig = getGithubConfig(config);
      if (githubConfig && githubConfig.token) {
        const result = await fetchGithubCommits(githubProject, githubConfig.token, githubConfig.apiBaseUrl);
        return res.status(200).json({commits: result});
      }
    }

    const gitlabProject = entity?.metadata.annotations?.['gitlab.com/project-slug'];

    if (gitlabProject) {
      const gitlabConfig = getGitlabConfig(config, entity);
      if (gitlabConfig && gitlabConfig.token && gitlabConfig.apiBaseUrl) {
        const result = await fetchGitlabCommits(gitlabProject, gitlabConfig.token, gitlabConfig.apiBaseUrl);
        return res.status(200).json({commits: result});
      }
    }

    return res.status(500).json()
  });

  router.get('/entity/:namespace/:kind/:name/fetchCommits/:id', async (req, res) => {

    const token = await tokenManager.getToken();
    const { namespace, kind, name, id } = req.params;
    const entity = await catalogApi.getEntityByRef(
      { namespace, kind, name },
      token,
    );
    if (!entity) {
      throw new NotFoundError(
        `No ${kind} entity in ${namespace} named "${name}"`,
      );
    }

    if (id) {
      const githubProject = entity?.metadata.annotations?.['github.com/project-slug'];

      if (githubProject) {
        const githubConfig = getGithubConfig(config);
        if (githubConfig && githubConfig.token) {
          const result = await fetchGithubCommit(githubProject, githubConfig.token, id, githubConfig.apiBaseUrl);
          return res.status(200).json({commits: result});
        }
      }
    }

    return res.status(500).json()
  });

  router.use(errorHandler());
  return router;
}
