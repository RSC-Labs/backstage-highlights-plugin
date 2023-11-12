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

import { Entity } from '@backstage/catalog-model';
import { createApiRef } from '@backstage/core-plugin-api';
import { GitBranch, GitCommit, GitInfo, GitTag } from './types';

/** @public */
export const highlightsApiRef = createApiRef<HighlightsApi>({
    id: 'plugin.highlights.client',
});

/** @public */
export interface HighlightsApi {
    fetchTags(entity: Entity): Promise<GitTag[]>
    fetchBranches(entity: Entity): Promise<GitBranch[]>
    fetchCommits(entity: Entity): Promise<GitCommit[]>
    fetchCommit(entity: Entity, id: string): Promise<GitCommit>
    fetchAll(entity: Entity): Promise<GitInfo>
}