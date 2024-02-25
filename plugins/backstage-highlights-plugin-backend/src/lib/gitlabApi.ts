import {ResponseError} from "@backstage/errors";


export async function getGitlabProjectDetails(projectSlug:string, apiBaseUrl:string, token:string){
    return callAPI(`${apiBaseUrl}/projects/${encodeURIComponent(projectSlug)}`, token);
}

export async function getGitlabTags(projectId:string, apiBaseUrl:string, token:string) {
    return callAPI(`${apiBaseUrl}/projects/${projectId}/repository/tags`, token);
}

export async function getGitlabBranches(projectId:string, apiBaseUrl:string, token:string) {
    return callAPI(`${apiBaseUrl}/projects/${projectId}/repository/branches`, token);
}

export async function getGitlabCommits(projectId:string, apiBaseUrl:string, token:string) {
    return callAPI(`${apiBaseUrl}/projects/${projectId}/repository/commits`, token);
}

async function callAPI(url:string, token:string) {
    const options = { headers: { 'PRIVATE-TOKEN': token}};

    const response = await fetch(url, options);

    if (response.status !== 200) {
        throw await ResponseError.fromResponse(response);
    }

    return await response.json();
}