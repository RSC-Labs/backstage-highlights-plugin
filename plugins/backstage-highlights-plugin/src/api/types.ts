/** @public */
export type GitTag = {
    name: string,
    tagUrl: string,
    commitUrl: string,
    commitId: string,
    commitApiUrl?: string,
    commitMessage?: string
}

/** @public */
export type GitBranch = string;

/** @public */
export type GitCommit = {
    id: string,
    htmlUrl: string,
    author: string,
    authorHtmlUrl?: string,
    message: string,
    date: Date
};

/** @public */
export type GitInfo = {
    tags: GitTag[],
    branches: GitBranch[],
    commits: GitCommit[]
};