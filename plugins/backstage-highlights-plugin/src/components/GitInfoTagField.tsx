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

import React, { useState } from 'react';
import { Dialog, DialogContent } from '@material-ui/core';
import { GitTag } from '../api/types';
import { Link } from '@backstage/core-components';
import { GitInfoTagTable } from './GitInfoTagTable';

export const GitInfoTagField = ({tags} : {tags: GitTag[]}) => {
    const [open, setOpen] = useState(false);

    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    const dialogContent = () => {
        return <GitInfoTagTable tags={tags}/>;
    };

    if (tags.length) {
        return (
            <>
                <Link color="primary" to="" onClick={(event) => {
                    event.preventDefault();
                    openDialog();
                }}>
                {tags[0].name}
                </Link>
                <Dialog
                open={open}
                onClose={closeDialog}
                    aria-labelledby="dialog-title"
                    aria-describedby="dialog-description"
                >
                    <DialogContent>{dialogContent()}</DialogContent>
                </Dialog>
            </>
        );
    }
    return (
        <>No tag</>
    )
    
};
  