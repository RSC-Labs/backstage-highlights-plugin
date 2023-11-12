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

import React  from 'react';
import { GitTag } from '../api/types';
import { Link, Table, TableColumn } from '@backstage/core-components';
import { Typography } from '@material-ui/core';
import { GitInfoTagTableCommit } from './GitInfoTagTableCommit';
// import { GitInfoTagGetCommits } from './GitInfoTagGetCommits';

export const GitInfoTagTable = ({tags} : {tags: GitTag[]}) => {

    const columns: TableColumn[] = [
        {
            title: "Tag",
            render: (gitTag: any) => (
                gitTag.tagUrl ? <Link to={gitTag.tagUrl}>{gitTag.name}</Link> : <Typography variant='body2'>{gitTag.name}</Typography>
                
            )
        },
        {
            title: "Commit",
            render: (gitTag: any) => {
                if (gitTag.commitMessage) {
                    return <Link to={gitTag.commitUrl}>{gitTag.commitMessage}</Link>;
                }
                return <GitInfoTagTableCommit tag={gitTag}/>;
            }
        },
    ];
    
    return (
        <Table
            options={{
                pageSize: 5,
                search: false,
                showTitle: false,
                toolbar: false,
                emptyRowsWhenPaging: false
            }}
            data={tags}
            columns={columns}
        />
    );
}
  