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
import { GitBranch } from '../api/types';
import { Table, TableColumn } from '@backstage/core-components';
import { Typography } from '@material-ui/core';

export const GitInfoBranchesTable = ({branches} : {branches: GitBranch[]}) => {

    const columns: TableColumn[] = [
        {
            title: "#",
            render: (rowData: any) => (
                <Typography>{rowData.tableData.id + 1}</Typography>
            )
        },
        {
            title: "Name",
            render: (gitBranch: any) => (
                <Typography>{gitBranch.name}</Typography>
            )
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
            data={branches.map(branch => {
                return {
                    name: branch
                }
            })}
            columns={columns}
        />
    );
};
  