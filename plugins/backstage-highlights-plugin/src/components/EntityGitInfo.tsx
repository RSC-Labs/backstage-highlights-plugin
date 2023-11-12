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
import { Grid } from '@material-ui/core';
import { useEntity } from '@backstage/plugin-catalog-react';
import { useApi } from '@backstage/core-plugin-api';
import { Alert } from '@material-ui/lab';
import { highlightsApiRef } from '../api';
import useAsync from 'react-use/lib/useAsync';
import { Progress } from '@backstage/core-components';
import { GitInfoLabel } from './GitInfoLabel';
import { GitInfoTagField } from './GitInfoTagField';
import { GitInfoBranchesField } from './GitInfoBranchesField';
import { GitInfoCommitsField } from './GitInfoCommitsField';
import { GitInfoCommitsDateField } from './GitInfoCommitDateField';
import { GtInfoAuthorField } from './GitInfoAuthorField';
import { GitInfoCloneField } from './GitInfoCloneField';
import { EHighlightFields } from '../util/types';

export const GitInfoCard = ({fields} : {fields: EHighlightFields[]}) => {

  const { entity } = useEntity();
  const highlightsApi = useApi(highlightsApiRef);

    const { value, loading, error } = useAsync(async () => {
      return highlightsApi.fetchAll(entity)
    })

    if (loading) {
      return (
        <Grid item xs={12} md={12}>
          <Progress/>
        </Grid>
      )
    }
    if (error) {
      return <Alert severity='error'>{JSON.stringify(error)}</Alert>
    }

    if (value && fields.length) {
      return <> {
        fields.map(field => {
          switch (field) {
            case EHighlightFields.latest_tag:
              return (
                <Grid item key={field}>
                  <GitInfoLabel label='Latest tag'/>
                  <GitInfoTagField tags={value.tags}></GitInfoTagField>
                </Grid>
              )
            case EHighlightFields.number_of_branches:
              return (
                 <Grid item key={field}>
                    <GitInfoLabel label='Number of branches'/>
                    <GitInfoBranchesField branches={value.branches}/>
                  </Grid>
                )
            case EHighlightFields.latest_commit:
              return (
                  <Grid item key={field}>
                    <GitInfoLabel label='Latest commit'/> 
                    <GitInfoCommitsField commits={value.commits}/>
                  </Grid>
              )
            case EHighlightFields.commit_date:
              return (
                  <Grid item key={field}>
                    <GitInfoLabel label='Committed'/>
                    <GitInfoCommitsDateField commits={value.commits}/>
                  </Grid>
              )
            case EHighlightFields.author:
              return (
                  <Grid item key={field}>
                    <GitInfoLabel label='Author'/>
                    <GtInfoAuthorField commits={value.commits}/>
                  </Grid>
              )
            case EHighlightFields.clone:
              return (
                  <Grid item key={field}>
                    <GitInfoCloneField/>
                  </Grid>
              )
            default:
              return <></>
          }
        })
      }</>
    }
    return <></>
}

