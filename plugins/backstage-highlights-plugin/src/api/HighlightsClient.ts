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

import { DiscoveryApi, FetchApi } from '@backstage/core-plugin-api';
import { GitCommit, GitInfo, GitTag, GitBranch } from './types';
import { HighlightsApi } from './HighlightsApi';
import { DEFAULT_NAMESPACE, Entity } from '@backstage/catalog-model';
import { generatePath } from 'react-router-dom';
import { ResponseError } from '@backstage/errors';


/** @public */
export class HighlightsClient implements HighlightsApi {
  private readonly discoveryApi: DiscoveryApi;
  private readonly fetchApi: FetchApi;
  public constructor(options: {
    discoveryApi: DiscoveryApi;
    fetchApi: FetchApi;
  }) {
    this.discoveryApi = options.discoveryApi;
    this.fetchApi = options.fetchApi;
  }

  private getEntityRouteParams(entity: Entity) {
    return {
      kind: entity.kind.toLocaleLowerCase('en-US'),
      namespace:
        entity.metadata.namespace?.toLocaleLowerCase('en-US') ??
        DEFAULT_NAMESPACE,
      name: entity.metadata.name,
    };
  }

  public async fetchAll(entity: Entity) : Promise<GitInfo> {
    const commits = await this.fetchCommits(entity);
    const branches = await this.fetchBranches(entity);
    const tags = await this.fetchTags(entity);

    return {
      branches: branches,
      tags: tags,
      commits: commits
    }
  }

  public async fetchCommits(entity: Entity): Promise<GitCommit[]> {
    const routeParams = this.getEntityRouteParams(entity);
    const path = generatePath(`:namespace/:kind/:name`, routeParams);
    const baseUrl = await this.discoveryApi.getBaseUrl('highlights');
    const response = await this.fetchApi.fetch(`${baseUrl}/entity/${path}/fetchCommits`);
    if (!response.ok) {
        throw await ResponseError.fromResponse(response);
    }
    const result = await response.json();
    return result.commits;
  }

  public async fetchCommit(entity: Entity, id: string): Promise<GitCommit> {
    const routeParams = this.getEntityRouteParams(entity);
    const path = generatePath(`:namespace/:kind/:name`, routeParams);
    const baseUrl = await this.discoveryApi.getBaseUrl('highlights');
    const response = await this.fetchApi.fetch(`${baseUrl}/entity/${path}/fetchCommits/${id}`);
    if (!response.ok) {
        throw await ResponseError.fromResponse(response);
    }
    const result = await response.json();
    return result.commits;
  }

  public async fetchBranches(entity: Entity): Promise<GitBranch[]> {
    const routeParams = this.getEntityRouteParams(entity);
    const path = generatePath(`:namespace/:kind/:name`, routeParams);
    const baseUrl = await this.discoveryApi.getBaseUrl('highlights');
    const response = await this.fetchApi.fetch(`${baseUrl}/entity/${path}/fetchBranches`);
    if (!response.ok) {
        throw await ResponseError.fromResponse(response);
    }
    const result = await response.json();
    return result.branches;
  }

  public async fetchTags(entity: Entity): Promise<GitTag[]> {
    const routeParams = this.getEntityRouteParams(entity);
    const path = generatePath(`:namespace/:kind/:name`, routeParams);
    const baseUrl = await this.discoveryApi.getBaseUrl('highlights');
    const response = await this.fetchApi.fetch(`${baseUrl}/entity/${path}/fetchTags`);
    if (!response.ok) {
        throw await ResponseError.fromResponse(response);
    }
    const result = await response.json();
    return result.tags;
  }
}