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

import { loggerToWinstonLogger } from '@backstage/backend-common';
import {
  coreServices,
  createBackendPlugin,
} from '@backstage/backend-plugin-api';
import { createRouter } from './service/router';

/**
 * Highlights backend plugin
 *
 * @public
 */
export const highlightsPlugin = createBackendPlugin({
  pluginId: 'highlights',
  register(env) {
    env.registerInit({
      deps: {
        logger: coreServices.logger,
        httpRouter: coreServices.httpRouter,
        discovery: coreServices.discovery,
        config: coreServices.rootConfig,
        auth: coreServices.auth,
      },
      async init({ logger, httpRouter, discovery, config, auth }) {
        httpRouter.use(
          await createRouter({
            logger: loggerToWinstonLogger(logger),
            discovery: discovery,
            config: config,
            auth: auth,
          }),
        );
      },
    });
  },
});