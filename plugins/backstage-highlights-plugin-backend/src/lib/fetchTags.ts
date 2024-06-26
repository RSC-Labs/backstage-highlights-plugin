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
import { GitTag } from '../types';
import { getGitlabProjectDetails, getGitlabTags } from './gitlabApi';


export async function fetchGithubTags(projectSlug: string, token: string, baseUrl?: string): Promise<GitTag[]> {
    const octokit = new Octokit({
        auth: token,
        baseUrl: baseUrl
    })

    const slugSplitted = projectSlug.split('/');

    const githubTags = await octokit.request(`GET /repos/${projectSlug}/tags`, {
        owner: slugSplitted[0],
        repo: slugSplitted[1],
    })
    
    const repoInfo = await octokit.request(`GET /repos/${projectSlug}`, {
        owner: slugSplitted[0],
        repo: slugSplitted[1],
    })

    const tags: GitTag[] = githubTags.data.map(((singleData: { name: any, commit: any; }) => {
        return {
            name: singleData.name,
            tagUrl: `${repoInfo.data.html_url}/releases/tag/${singleData.name}`,
            commitId: singleData.commit.sha,
            commitUrl: `${repoInfo.data.html_url}/commits/${singleData.commit.sha}`,
            commitApiUrl: singleData.commit.url
        }
    }));

    return tags;
}

export async function fetchGitlabTags(projectSlug: string, token: string, apiBaseUrl: string): Promise<GitTag[]> {

    const projectDetails = await getGitlabProjectDetails(projectSlug, apiBaseUrl, token);
    const projectId = projectDetails.id;

    const tagsJson = await getGitlabTags(projectId, apiBaseUrl, token);

    const tags = tagsJson.map((singleResult: { name: any; commit: { id: any; message: any; }; }) => {
        return {
            name: singleResult.name,
            tagUrl: `${projectDetails.web_url}/-/releases/${singleResult.name}`,
            commitId: singleResult.commit.id,
            commitUrl: `${projectDetails.web_url}/-/commit/${singleResult.commit.id}`,
            commitMessage: singleResult.commit.message
        }
    })

    return tags;
}