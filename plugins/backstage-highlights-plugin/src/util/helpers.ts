import { Entity } from '@backstage/catalog-model';

import { GITHUB_ANNOTATION_PROJECT_SLUG, GITLAB_ANNOTATION_PROJECT_SLUG } from './constants';

export const isGithubHighlightsAvailable = (entity: Entity) =>
    Boolean(entity?.metadata.annotations?.[GITHUB_ANNOTATION_PROJECT_SLUG]);
export const isGitlabHighlightsAvailable = (entity: Entity) =>
    Boolean(entity?.metadata.annotations?.[GITLAB_ANNOTATION_PROJECT_SLUG]);
export const isHighlightsAvailable = (entity: Entity) =>
    isGithubHighlightsAvailable(entity) || isGitlabHighlightsAvailable(entity);
