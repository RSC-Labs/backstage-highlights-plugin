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

import { Octokit } from '@octokit/rest';
import { GitBranch } from '../types';


export async function fetchGithubBranches(projectSlug: string, token: string, baseUrl?: string): Promise<string[]> {
    const octokit = new Octokit({
        auth: token,
        baseUrl: baseUrl
    })

    const slugSplitted = projectSlug.split('/');

    const result = await octokit.request(`GET /repos/${projectSlug}/branches`, {
        owner: slugSplitted[0],
        repo: slugSplitted[1],
    })

    const branches = result.data.map((singleData: { name: any; }) => singleData.name);

    return branches;
}

export async function fetchGitlabBranches(projectSlug: string, token: string, apiBaseUrl: string): Promise<GitBranch[]> {

    const slugSplitted = projectSlug.split('/');

    const result = await fetch(`${apiBaseUrl}/projects/${slugSplitted[0]}%2F${slugSplitted[1]}/repository/branches?private_token=${token}`);

    const resultJson = await result.json();

    const branches = resultJson.map((singleResult: { name: any; }) => singleResult.name);

    return branches;
}

