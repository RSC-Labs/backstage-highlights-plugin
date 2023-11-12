import { TokenManager, PluginEndpointDiscovery } from '@backstage/backend-common';
import { CatalogApi } from '@backstage/catalog-client';
import * as express from 'express';
import { Logger } from 'winston';
import { Config } from '@backstage/config';
import * as _backstage_backend_plugin_api from '@backstage/backend-plugin-api';

interface RouterOptions {
    logger: Logger;
    tokenManager: TokenManager;
    discovery: PluginEndpointDiscovery;
    config: Config;
    catalogApi?: CatalogApi;
}
declare function createRouter(options: RouterOptions): Promise<express.Router>;

/**
 * Highlights backend plugin
 *
 * @public
 */
declare const highlightsPlugin: () => _backstage_backend_plugin_api.BackendFeature;

/** @public */
type GitTag = {
    name: string;
    tagUrl: string;
    commitUrl: string;
    commitId: string;
    commitApiUrl?: string;
    commitMessage?: string;
};
/** @public */
type GitBranch = string;
/** @public */
type GitCommit = {
    id: string;
    htmlUrl: string;
    author: string;
    authorHtmlUrl?: string;
    message: string;
    date: Date;
};

export { GitBranch, GitCommit, GitTag, RouterOptions, createRouter, highlightsPlugin as default };
