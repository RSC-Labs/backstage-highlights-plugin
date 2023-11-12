import { ReactChild } from "react";

/** @public */
export enum EHighlightFields {
    latest_tag = 'latest_tag',
    latest_commit = 'latest_commit',
    number_of_branches = 'number_of_branches',
    commit_date = 'commit_date',
    author = 'author',
    clone = 'clone'
}

/** @public */
export type HighlightCustomField = {
    fieldLabel?: string,
    field: ReactChild
}

/** @public */
export interface EntityHighlightsProps {
    fields? : EHighlightFields[],
    customFields?: HighlightCustomField[]
}