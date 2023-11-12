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

import React, { useState }  from 'react';
import { CopyTextButton, LinkButton } from '@backstage/core-components';
import { Dialog, DialogContent, TextField } from '@material-ui/core';
import { useEntity } from '@backstage/plugin-catalog-react';
import { GITHUB_ANNOTATION_PROJECT_SLUG, GITLAB_ANNOTATION_PROJECT_SLUG } from '../util';
import { Alert } from '@material-ui/lab';

const GitInfoCloneDialog = () => {
    const { entity } = useEntity();

    const githubAnnotation = entity.metadata.annotations?.[GITHUB_ANNOTATION_PROJECT_SLUG];
    const gitlabAnnotation = entity.metadata.annotations?.[GITLAB_ANNOTATION_PROJECT_SLUG];

    let cloneUrl: string | undefined;
    
    if (githubAnnotation) {
        cloneUrl = `https://github.com/${githubAnnotation}.git`;
    }
    if (gitlabAnnotation) {
        cloneUrl = `https://gitlab.com/${gitlabAnnotation}.git`;
    }
    if (cloneUrl) {
        return (
            <>
                <TextField
                    id="outlined-read-only-input"
                    label="HTTPS"
                    defaultValue={cloneUrl}
                    onFocus={event => {
                        event.target.select();
                    }}
                    style={ { width: 400 }}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <CopyTextButton text={cloneUrl} tooltipText='Copied!'/>
            </>
        );
    }
    return <Alert severity='error'>No annotation</Alert>
}

export const GitInfoCloneField = () => {
    const [open, setOpen] = useState(false);

    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    };

    const dialogContent = () => {
        return <GitInfoCloneDialog/>;
    };

    return (
        <>
            <LinkButton size='small' color="default" variant="outlined" to="" onClick={(event) => {
                event.preventDefault();
                openDialog();
            }}>
            Clone
            </LinkButton>
            <Dialog
            maxWidth='xl'
            open={open}
            onClose={closeDialog}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
            >
                <DialogContent>{dialogContent()}</DialogContent>
            </Dialog>
        </>
    );
};
  