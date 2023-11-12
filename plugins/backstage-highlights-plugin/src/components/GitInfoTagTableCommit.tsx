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

import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useEntity } from '@backstage/plugin-catalog-react';
import { useApi } from '@backstage/core-plugin-api';
import { Alert } from '@material-ui/lab';
import { highlightsApiRef } from '../api';
import useAsync from 'react-use/lib/useAsync';
import { Link, } from '@backstage/core-components';
import { GitTag } from '../api/types';

export const GitInfoTagTableCommit = ({tag} : {tag: GitTag}) => {
    const { entity } = useEntity();
    const highlightsApi = useApi(highlightsApiRef);

    const { value, loading, error } = useAsync(async () => {
      return highlightsApi.fetchCommit(entity, tag.commitId);
    })

    if (loading) {
      return <CircularProgress size={16}/>
    }
    if (error) {
      return <Alert severity='error'></Alert>
    }

    if (value) {
        return <Link to={value.htmlUrl}>{value.message}</Link>;
    }
    return <></>
}

