/// <reference types="react" />
import * as react from 'react';
import { ReactChild } from 'react';

/** @public */
declare enum EHighlightFields {
    latest_tag = "latest_tag",
    latest_commit = "latest_commit",
    number_of_branches = "number_of_branches",
    commit_date = "commit_date",
    author = "author",
    clone = "clone"
}
/** @public */
type HighlightCustomField = {
    fieldLabel?: string;
    field: ReactChild;
};
/** @public */
interface EntityHighlightsProps {
    fields?: EHighlightFields[];
    customFields?: HighlightCustomField[];
}

/** @public */
declare const EntityHighlightsCard: (props: EntityHighlightsProps) => react.JSX.Element;

export { EHighlightFields, EntityHighlightsCard, EntityHighlightsProps, HighlightCustomField };
