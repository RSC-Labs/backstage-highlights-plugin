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

import { createApiFactory, createComponentExtension, createPlugin, discoveryApiRef, fetchApiRef } from '@backstage/core-plugin-api';
import { highlightsApiRef } from './api';
import { rootRouteRef } from './routes';
import { HighlightsClient } from './api/HighlightsClient';

/** @public */
export const backstageHighlightsPlugin = createPlugin({
  id: 'highlights',
  apis: [
    createApiFactory({
      api: highlightsApiRef,
      deps: {
        discoveryApi: discoveryApiRef,
        fetchApi: fetchApiRef
      },
      factory: ({  discoveryApi, fetchApi }) => 
        new HighlightsClient({
          discoveryApi,
          fetchApi
        }),
    }),
  ],
  routes: {
    root: rootRouteRef,
  },
});

/** @public */
export const EntityHighlightsCard = backstageHighlightsPlugin.provide(
  createComponentExtension({
    name: 'EntityHighlightsCard',
    component: {
      lazy: () =>
        import('./components').then(m => m.HighlightsCard),
    },
  }),
)