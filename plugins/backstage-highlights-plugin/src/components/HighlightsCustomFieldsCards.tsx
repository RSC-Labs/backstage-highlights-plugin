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
import { HighlightCustomField } from '../util/types';
import { GitInfoLabel } from './GitInfoLabel';

export const HighlightsCustomFieldsCards = ({customFields}: {customFields: HighlightCustomField[]}) => {
    return (
        <>
        {customFields.map((customField, index) =>
            (
                <Grid item key={index}>
                    {customField.fieldLabel && <GitInfoLabel label={customField.fieldLabel!}/>}
                    {customField.field}
                </Grid>
            )
        )}
        </>
    );
}