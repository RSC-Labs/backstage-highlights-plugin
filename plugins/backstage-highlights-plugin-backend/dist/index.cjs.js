'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var backendCommon = require('@backstage/backend-common');
var integration = require('@backstage/integration');
var catalogClient = require('@backstage/catalog-client');
var errors = require('@backstage/errors');
var express = require('express');
var Router = require('express-promise-router');
var rest = require('@octokit/rest');
var backendPluginApi = require('@backstage/backend-plugin-api');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var express__namespace = /*#__PURE__*/_interopNamespace(express);
var Router__default = /*#__PURE__*/_interopDefaultLegacy(Router);

async function fetchGithubBranches(projectSlug, token, baseUrl) {
  const octokit = new rest.Octokit({
    auth: token,
    baseUrl
  });
  const slugSplitted = projectSlug.split("/");
  const result = await octokit.request(`GET /repos/${projectSlug}/branches`, {
    owner: slugSplitted[0],
    repo: slugSplitted[1]
  });
  const branches = result.data.map((singleData) => singleData.name);
  return branches;
}
async function fetchGitlabBranches(projectSlug, token, apiBaseUrl) {
  const slugSplitted = projectSlug.split("/");
  const result = await fetch(`${apiBaseUrl}/projects/${slugSplitted[0]}%2F${slugSplitted[1]}/repository/branches?private_token=${token}`);
  if (result.status !== 200) {
    throw await errors.ResponseError.fromResponse(result);
  }
  const resultJson = await result.json();
  const branches = resultJson.map((singleResult) => singleResult.name);
  return branches;
}

async function fetchGithubTags(projectSlug, token, baseUrl) {
  const octokit = new rest.Octokit({
    auth: token,
    baseUrl
  });
  const slugSplitted = projectSlug.split("/");
  const githubTags = await octokit.request(`GET /repos/${projectSlug}/tags`, {
    owner: slugSplitted[0],
    repo: slugSplitted[1]
  });
  const repoInfo = await octokit.request(`GET /repos/${projectSlug}`, {
    owner: slugSplitted[0],
    repo: slugSplitted[1]
  });
  const tags = githubTags.data.map((singleData) => {
    return {
      name: singleData.name,
      tagUrl: `${repoInfo.data.html_url} + '/releases/tag/' + ${singleData.name}`,
      commitId: singleData.commit.sha,
      commitUrl: `${repoInfo.data.html_url} + '/commits/' + ${singleData.commit.sha}`,
      commitApiUrl: singleData.commit.url
    };
  });
  return tags;
}
async function fetchGitlabTags(projectSlug, token, apiBaseUrl) {
  const slugSplitted = projectSlug.split("/");
  const result = await fetch(`${apiBaseUrl}/projects/${slugSplitted[0]}%2F${slugSplitted[1]}/repository/tags?private_token=${token}`);
  if (result.status !== 200) {
    throw await errors.ResponseError.fromResponse(result);
  }
  const resultJson = await result.json();
  const projectResult = await fetch(`${apiBaseUrl}/projects/${slugSplitted[0]}%2F${slugSplitted[1]}?private_token=${token}`);
  const projectResultJson = await projectResult.json();
  const tags = resultJson.map((singleResult) => {
    return {
      name: singleResult.name,
      tagUrl: `${projectResultJson.web_url}/-/releases/${singleResult.name}`,
      commitId: singleResult.commit.id,
      commitUrl: `${projectResultJson.web_url}/-/commit/${singleResult.commit.id}`,
      commitMessage: singleResult.commit.message
    };
  });
  return tags;
}

async function fetchGithubCommit(projectSlug, token, id, baseUrl) {
  const octokit = new rest.Octokit({
    auth: token,
    baseUrl
  });
  const slugSplitted = projectSlug.split("/");
  const result = await octokit.request(`GET /repos/${projectSlug}/commits/${id}`, {
    owner: slugSplitted[0],
    repo: slugSplitted[1]
  });
  return {
    id: result.data.sha,
    author: result.data.commit.author.name,
    authorHtmlUrl: result.data.author.html_url,
    htmlUrl: result.data.html_url,
    message: result.data.commit.message,
    date: result.data.commit.author.date
  };
}
async function fetchGithubCommits(projectSlug, token, baseUrl) {
  const octokit = new rest.Octokit({
    auth: token,
    baseUrl
  });
  const slugSplitted = projectSlug.split("/");
  const result = await octokit.request(`GET /repos/${projectSlug}/commits`, {
    owner: slugSplitted[0],
    repo: slugSplitted[1]
  });
  const commits = result.data.map((singleData) => {
    return {
      id: singleData.sha,
      author: singleData.commit.author.name,
      authorHtmlUrl: singleData.author.html_url,
      htmlUrl: singleData.html_url,
      message: singleData.commit.message,
      date: singleData.commit.author.date
    };
  });
  return commits;
}
async function fetchGitlabCommits(projectSlug, token, apiBaseUrl) {
  const slugSplitted = projectSlug.split("/");
  const result = await fetch(`${apiBaseUrl}/projects/${slugSplitted[0]}%2F${slugSplitted[1]}/repository/commits?private_token=${token}`);
  if (result.status !== 200) {
    throw await errors.ResponseError.fromResponse(result);
  }
  const resultJson = await result.json();
  const commits = resultJson.map((singleResult) => {
    return {
      id: singleResult.id,
      author: singleResult.author_name,
      htmlUrl: singleResult.web_url,
      message: singleResult.message,
      date: singleResult.committed_date
    };
  });
  return commits;
}

function getGithubConfigFromHighlights(config) {
  const githubConfig = config.getOptionalConfig("highlights.github");
  if (githubConfig) {
    return {
      token: githubConfig.getOptionalString("token"),
      apiBaseUrl: githubConfig.getOptionalString("apiBaseUrl")
    };
  }
  return void 0;
}
function getGitlabConfigFromHighlights(config, instance) {
  try {
    const gitlabConfigs = config.getOptionalConfigArray("highlights.gitlab");
    if (gitlabConfigs && instance) {
      for (let i = 0; i < gitlabConfigs.length; i++) {
        if (gitlabConfigs[i].getOptionalString("host") && gitlabConfigs[i].getOptionalString("host") == instance) {
          return {
            token: gitlabConfigs[i].getOptionalString("token"),
            apiBaseUrl: gitlabConfigs[i].getOptionalString("apiBaseUrl")
          };
        }
      }
      return void 0;
    }
    if (gitlabConfigs && gitlabConfigs.length) {
      return {
        token: gitlabConfigs[0].getOptionalString("token"),
        apiBaseUrl: gitlabConfigs[0].getOptionalString("apiBaseUrl")
      };
    }
    return void 0;
  } catch {
    const gitlabConfig = config.getOptionalConfig("highlights.gitlab");
    if (gitlabConfig) {
      return {
        token: gitlabConfig.getOptionalString("token"),
        apiBaseUrl: gitlabConfig.getOptionalString("apiBaseUrl")
      };
    }
    return void 0;
  }
}
function getGithubConfig(config) {
  if (getGithubConfigFromHighlights(config)) {
    return getGithubConfigFromHighlights(config);
  }
  const githubConfigArray = config.getOptionalConfigArray("integrations.github");
  if (githubConfigArray && githubConfigArray.length) {
    const integrationConfig = integration.readGithubIntegrationConfig(githubConfigArray[0]);
    return {
      token: integrationConfig.token,
      apiBaseUrl: integrationConfig.apiBaseUrl
    };
  }
  return void 0;
}
function getGitlabConfig(config, entity) {
  var _a;
  const gitlabInstanceAnnotation = (_a = entity == null ? void 0 : entity.metadata.annotations) == null ? void 0 : _a["gitlab.com/instance"];
  if (getGitlabConfigFromHighlights(config, gitlabInstanceAnnotation)) {
    return getGitlabConfigFromHighlights(config, gitlabInstanceAnnotation);
  }
  const gitlabConfigArray = config.getOptionalConfigArray("integrations.gitlab");
  if (gitlabConfigArray && gitlabConfigArray.length) {
    if (gitlabInstanceAnnotation) {
      for (let i = 0; i < gitlabConfigArray.length; i++) {
        if (gitlabConfigArray[i].getOptionalString("host") && gitlabConfigArray[i].getOptionalString("host") == gitlabInstanceAnnotation) {
          return {
            token: gitlabConfigArray[i].getOptionalString("token"),
            apiBaseUrl: gitlabConfigArray[i].getOptionalString("apiBaseUrl")
          };
        }
      }
    }
    const integrationConfig = integration.readGitLabIntegrationConfig(gitlabConfigArray[0]);
    return {
      token: integrationConfig.token,
      apiBaseUrl: integrationConfig.apiBaseUrl
    };
  }
  return void 0;
}
async function createRouter(options) {
  var _a;
  const { logger, tokenManager, discovery, config } = options;
  const catalogApi = (_a = options.catalogApi) != null ? _a : new catalogClient.CatalogClient({ discoveryApi: discovery });
  const router = Router__default["default"]();
  router.use(express__namespace.json());
  router.get("/health", async () => {
    logger.info("PONG!");
  });
  router.get("/entity/:namespace/:kind/:name/fetchBranches", async (req, res) => {
    var _a2, _b;
    const token = await tokenManager.getToken();
    const { namespace, kind, name } = req.params;
    const entity = await catalogApi.getEntityByRef(
      { namespace, kind, name },
      token
    );
    if (!entity) {
      throw new errors.NotFoundError(
        `No ${kind} entity in ${namespace} named "${name}"`
      );
    }
    const githubProject = (_a2 = entity == null ? void 0 : entity.metadata.annotations) == null ? void 0 : _a2["github.com/project-slug"];
    if (githubProject) {
      const githubConfig = getGithubConfig(config);
      if (githubConfig && githubConfig.token) {
        const result = await fetchGithubBranches(githubProject, githubConfig.token, githubConfig.apiBaseUrl);
        return res.status(200).json({ branches: result });
      }
    }
    const gitlabProject = (_b = entity == null ? void 0 : entity.metadata.annotations) == null ? void 0 : _b["gitlab.com/project-slug"];
    if (gitlabProject) {
      const gitlabConfig = getGitlabConfig(config, entity);
      if (gitlabConfig && gitlabConfig.token && gitlabConfig.apiBaseUrl) {
        const result = await fetchGitlabBranches(gitlabProject, gitlabConfig.token, gitlabConfig.apiBaseUrl);
        return res.status(200).json({ branches: result });
      }
    }
    return res.status(500).json();
  });
  router.get("/entity/:namespace/:kind/:name/fetchTags", async (req, res) => {
    var _a2, _b;
    const token = await tokenManager.getToken();
    const { namespace, kind, name } = req.params;
    const entity = await catalogApi.getEntityByRef(
      { namespace, kind, name },
      token
    );
    if (!entity) {
      throw new errors.NotFoundError(
        `No ${kind} entity in ${namespace} named "${name}"`
      );
    }
    const githubProject = (_a2 = entity == null ? void 0 : entity.metadata.annotations) == null ? void 0 : _a2["github.com/project-slug"];
    if (githubProject) {
      const githubConfig = getGithubConfig(config);
      if (githubConfig && githubConfig.token) {
        const result = await fetchGithubTags(githubProject, githubConfig.token, githubConfig.apiBaseUrl);
        return res.status(200).json({ tags: result });
      }
    }
    const gitlabProject = (_b = entity == null ? void 0 : entity.metadata.annotations) == null ? void 0 : _b["gitlab.com/project-slug"];
    if (gitlabProject) {
      const gitlabConfig = getGitlabConfig(config, entity);
      if (gitlabConfig && gitlabConfig.token && gitlabConfig.apiBaseUrl) {
        const result = await fetchGitlabTags(gitlabProject, gitlabConfig.token, gitlabConfig.apiBaseUrl);
        return res.status(200).json({ tags: result });
      }
    }
    return res.status(500).json();
  });
  router.get("/entity/:namespace/:kind/:name/fetchCommits", async (req, res) => {
    var _a2, _b;
    const token = await tokenManager.getToken();
    const { namespace, kind, name } = req.params;
    const entity = await catalogApi.getEntityByRef(
      { namespace, kind, name },
      token
    );
    if (!entity) {
      throw new errors.NotFoundError(
        `No ${kind} entity in ${namespace} named "${name}"`
      );
    }
    const githubProject = (_a2 = entity == null ? void 0 : entity.metadata.annotations) == null ? void 0 : _a2["github.com/project-slug"];
    if (githubProject) {
      const githubConfig = getGithubConfig(config);
      if (githubConfig && githubConfig.token) {
        const result = await fetchGithubCommits(githubProject, githubConfig.token, githubConfig.apiBaseUrl);
        return res.status(200).json({ commits: result });
      }
    }
    const gitlabProject = (_b = entity == null ? void 0 : entity.metadata.annotations) == null ? void 0 : _b["gitlab.com/project-slug"];
    if (gitlabProject) {
      const gitlabConfig = getGitlabConfig(config, entity);
      if (gitlabConfig && gitlabConfig.token && gitlabConfig.apiBaseUrl) {
        const result = await fetchGitlabCommits(gitlabProject, gitlabConfig.token, gitlabConfig.apiBaseUrl);
        return res.status(200).json({ commits: result });
      }
    }
    return res.status(500).json();
  });
  router.get("/entity/:namespace/:kind/:name/fetchCommits/:id", async (req, res) => {
    var _a2;
    const token = await tokenManager.getToken();
    const { namespace, kind, name, id } = req.params;
    const entity = await catalogApi.getEntityByRef(
      { namespace, kind, name },
      token
    );
    if (!entity) {
      throw new errors.NotFoundError(
        `No ${kind} entity in ${namespace} named "${name}"`
      );
    }
    if (id) {
      const githubProject = (_a2 = entity == null ? void 0 : entity.metadata.annotations) == null ? void 0 : _a2["github.com/project-slug"];
      if (githubProject) {
        const githubConfig = getGithubConfig(config);
        if (githubConfig && githubConfig.token) {
          const result = await fetchGithubCommit(githubProject, githubConfig.token, id, githubConfig.apiBaseUrl);
          return res.status(200).json({ commits: result });
        }
      }
    }
    return res.status(500).json();
  });
  router.use(backendCommon.errorHandler());
  return router;
}

const highlightsPlugin = backendPluginApi.createBackendPlugin({
  pluginId: "highlights",
  register(env) {
    env.registerInit({
      deps: {
        logger: backendPluginApi.coreServices.logger,
        httpRouter: backendPluginApi.coreServices.httpRouter,
        tokenManager: backendPluginApi.coreServices.tokenManager,
        discovery: backendPluginApi.coreServices.discovery,
        config: backendPluginApi.coreServices.rootConfig
      },
      async init({ logger, httpRouter, tokenManager, discovery, config }) {
        httpRouter.use(
          await createRouter({
            logger: backendCommon.loggerToWinstonLogger(logger),
            tokenManager,
            discovery,
            config
          })
        );
      }
    });
  }
});

exports.createRouter = createRouter;
exports["default"] = highlightsPlugin;
//# sourceMappingURL=index.cjs.js.map
