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

import { Octokit,  } from '@octokit/rest';
import { GitCommit } from '../types';
import { ResponseError } from '@backstage/errors';

export async function fetchGithubCommit(projectSlug: string, token: string, id: string, baseUrl?: string): Promise<GitCommit> {
    const octokit = new Octokit({
        auth: token,
        baseUrl: baseUrl
    })

    const slugSplitted = projectSlug.split('/');

    const result = await octokit.request(`GET /repos/${projectSlug}/commits/${id}`, {
        owner: slugSplitted[0],
        repo: slugSplitted[1],
    })

    return {
        id: result.data.sha,
        author: result.data.commit.author.name,
        authorHtmlUrl: result.data.author.html_url,
        htmlUrl: result.data.html_url,
        message: result.data.commit.message,
        date: result.data.commit.author.date
    }
}


export async function fetchGithubCommits(projectSlug: string, token: string, baseUrl?: string): Promise<GitCommit[]> {
    const octokit = new Octokit({
        auth: token,
        baseUrl: baseUrl
    })

    const slugSplitted = projectSlug.split('/');

    const result = await octokit.request(`GET /repos/${projectSlug}/commits`, {
        owner: slugSplitted[0],
        repo: slugSplitted[1],
    })

    const commits = result.data.map((singleData: {
        html_url: any;
        author: any; sha: any; commit: { author: { name: any; date: any, html_url: any }; htmlUrl: any; message: any; }; 
}) => {
        return {
            id: singleData.sha,
            author: singleData.commit.author.name,
            authorHtmlUrl: singleData.author.html_url,
            htmlUrl: singleData.html_url,
            message: singleData.commit.message,
            date: singleData.commit.author.date
        }
    });

    return commits;
}

export async function fetchGitlabCommits(projectSlug: string, token: string, apiBaseUrl: string): Promise<GitCommit[]> {

    const slugSplitted = projectSlug.split('/');

    const result = await fetch(`${apiBaseUrl}/projects/${slugSplitted[0]}%2F${slugSplitted[1]}/repository/commits?private_token=${token}`);

    if (result.status !== 200) {
        throw await ResponseError.fromResponse(result);
    }
    
    const resultJson = await result.json();

    const commits = resultJson.map(((singleResult: { id: any; author_name: any; web_url: any; message: any; committed_date: any; committer_name: any; }) => {
        return {
            id: singleResult.id,
            author: singleResult.author_name,
            htmlUrl: singleResult.web_url,
            message: singleResult.message,
            date: singleResult.committed_date
        }
    }));

    return commits;
}

