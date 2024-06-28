import { createApiRef, createRouteRef, createPlugin, createApiFactory, discoveryApiRef, fetchApiRef, createComponentExtension } from '@backstage/core-plugin-api';
import { DEFAULT_NAMESPACE } from '@backstage/catalog-model';
import { generatePath } from 'react-router-dom';
import { ResponseError } from '@backstage/errors';

const highlightsApiRef = createApiRef({
  id: "plugin.highlights.client"
});

const rootRouteRef = createRouteRef({
  id: "backstage-highlights"
});

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class HighlightsClient {
  constructor(options) {
    __publicField(this, "discoveryApi");
    __publicField(this, "fetchApi");
    this.discoveryApi = options.discoveryApi;
    this.fetchApi = options.fetchApi;
  }
  getEntityRouteParams(entity) {
    var _a, _b;
    return {
      kind: entity.kind.toLocaleLowerCase("en-US"),
      namespace: (_b = (_a = entity.metadata.namespace) == null ? void 0 : _a.toLocaleLowerCase("en-US")) != null ? _b : DEFAULT_NAMESPACE,
      name: entity.metadata.name
    };
  }
  async fetchAll(entity) {
    const commits = await this.fetchCommits(entity);
    const branches = await this.fetchBranches(entity);
    const tags = await this.fetchTags(entity);
    return {
      branches,
      tags,
      commits
    };
  }
  async fetchCommits(entity) {
    const routeParams = this.getEntityRouteParams(entity);
    const path = generatePath(`:namespace/:kind/:name`, routeParams);
    const baseUrl = await this.discoveryApi.getBaseUrl("highlights");
    const response = await this.fetchApi.fetch(`${baseUrl}/entity/${path}/fetchCommits`);
    if (!response.ok) {
      throw await ResponseError.fromResponse(response);
    }
    const result = await response.json();
    return result.commits;
  }
  async fetchCommit(entity, id) {
    const routeParams = this.getEntityRouteParams(entity);
    const path = generatePath(`:namespace/:kind/:name`, routeParams);
    const baseUrl = await this.discoveryApi.getBaseUrl("highlights");
    const response = await this.fetchApi.fetch(`${baseUrl}/entity/${path}/fetchCommits/${id}`);
    if (!response.ok) {
      throw await ResponseError.fromResponse(response);
    }
    const result = await response.json();
    return result.commits;
  }
  async fetchBranches(entity) {
    const routeParams = this.getEntityRouteParams(entity);
    const path = generatePath(`:namespace/:kind/:name`, routeParams);
    const baseUrl = await this.discoveryApi.getBaseUrl("highlights");
    const response = await this.fetchApi.fetch(`${baseUrl}/entity/${path}/fetchBranches`);
    if (!response.ok) {
      throw await ResponseError.fromResponse(response);
    }
    const result = await response.json();
    return result.branches;
  }
  async fetchTags(entity) {
    const routeParams = this.getEntityRouteParams(entity);
    const path = generatePath(`:namespace/:kind/:name`, routeParams);
    const baseUrl = await this.discoveryApi.getBaseUrl("highlights");
    const response = await this.fetchApi.fetch(`${baseUrl}/entity/${path}/fetchTags`);
    if (!response.ok) {
      throw await ResponseError.fromResponse(response);
    }
    const result = await response.json();
    return result.tags;
  }
}

const backstageHighlightsPlugin = createPlugin({
  id: "highlights",
  apis: [
    createApiFactory({
      api: highlightsApiRef,
      deps: {
        discoveryApi: discoveryApiRef,
        fetchApi: fetchApiRef
      },
      factory: ({ discoveryApi, fetchApi }) => new HighlightsClient({
        discoveryApi,
        fetchApi
      })
    })
  ],
  routes: {
    root: rootRouteRef
  }
});
const EntityHighlightsCard = backstageHighlightsPlugin.provide(
  createComponentExtension({
    name: "EntityHighlightsCard",
    component: {
      lazy: () => import('./index-98782c19.esm.js').then((m) => m.HighlightsCard)
    }
  })
);

var EHighlightFields = /* @__PURE__ */ ((EHighlightFields2) => {
  EHighlightFields2["latest_tag"] = "latest_tag";
  EHighlightFields2["latest_commit"] = "latest_commit";
  EHighlightFields2["number_of_branches"] = "number_of_branches";
  EHighlightFields2["commit_date"] = "commit_date";
  EHighlightFields2["author"] = "author";
  EHighlightFields2["clone"] = "clone";
  return EHighlightFields2;
})(EHighlightFields || {});

const GITHUB_ANNOTATION_PROJECT_SLUG = "github.com/project-slug";
const GITLAB_ANNOTATION_PROJECT_SLUG = "gitlab.com/project-slug";
const GITLAB_ANNOTATION_INSTANCE = "gitlab.com/instance";
const DefaultGitInfoFields = [
  EHighlightFields.latest_tag,
  EHighlightFields.number_of_branches,
  EHighlightFields.latest_commit,
  EHighlightFields.commit_date,
  EHighlightFields.author,
  EHighlightFields.clone
];

export { DefaultGitInfoFields as D, EHighlightFields as E, GITHUB_ANNOTATION_PROJECT_SLUG as G, GITLAB_ANNOTATION_PROJECT_SLUG as a, GITLAB_ANNOTATION_INSTANCE as b, EntityHighlightsCard as c, highlightsApiRef as h };
//# sourceMappingURL=index-9a116a4a.esm.js.map
