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
import { GitCommit } from '../api/types';
import { Link, Table, TableColumn } from '@backstage/core-components';
import { DateTime } from 'luxon';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'
import { Tooltip, Typography } from '@material-ui/core';
TimeAgo.addDefaultLocale(en);

export const GitInfoCommitsTable = ({commits} : {commits: GitCommit[]}) => {

    const columns: TableColumn[] = [
        {
            title: "Committed",
            render: (gitCommit: any) => {
                const date = DateTime.fromISO(gitCommit.date);
                const timeAgo = new TimeAgo('en-US');
                return (
                    <Tooltip title={date.toHTTP() ? date.toHTTP()! : ''}>
                        <Typography variant='body2'>{timeAgo.format(date.toJSDate())}</Typography>
                    </Tooltip>
                );
            }
        },
        {
            title: "Message",
            render: (gitCommit: any) => (
                gitCommit.htmlUrl ? <Link to={gitCommit.htmlUrl}>{gitCommit.message}</Link> : <Typography variant='body2'>{gitCommit.message}</Typography>
            )
        },
        {
            title: "Author",
            render: (gitCommit: any) => (
                gitCommit.authorHtmlUrl ? <Link to={gitCommit.authorHtmlUrl}>{gitCommit.author}</Link> : <Typography variant='body2'>{gitCommit.author}</Typography>
            )
        },
    ];
    
    return (
        <Table
            style={{ width: 800 }}
            options={{
                pageSize: 5,
                search: false,
                showTitle: false,
                toolbar: false,
                emptyRowsWhenPaging: false
            }}
            data={commits}
            columns={columns}
        />
    );
};
  