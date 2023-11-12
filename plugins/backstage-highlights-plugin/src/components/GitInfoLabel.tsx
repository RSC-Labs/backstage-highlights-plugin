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
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    label: {
      color: theme.palette.text.secondary,
      textTransform: 'uppercase',
      fontSize: '10px',
      fontWeight: 'bold',
      letterSpacing: 0.5,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
  }));

export const GitInfoLabel = ({label} : {label: string}) => {
    const classes = useStyles();
    return (
      <Typography variant='body2' className={classes.label}>
        {label}
      </Typography>
    )
}
 export const TypographyField = ({text} : {text: string}) =>
  (
    <Typography variant='body2'>
      {text}
    </Typography>
  )
