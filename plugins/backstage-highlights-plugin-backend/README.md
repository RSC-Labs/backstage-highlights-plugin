# @rsc-labs/backstage-highlights-plugin-backend

<img src='https://raw.githubusercontent.com/RSC-Labs/backstage-highlights-plugin/main/docs/highlighter.png' width='100' height='150' alt='Highlights screenshot'>

Backstage Highlights Plugin is configurable and customizable plugin for viewing the most important information about your entity.

### Why?

We have a lot information from different plugins and also in Overview tab, but sometimes:
- we want to see some short summary from couple of plugins
- we do not want to jump to every card to get such information

The "Highlights" shall provide you possibility to create such small, useful view.

# Getting started

If you haven't already, check out the [Backstage docs](https://backstage.io/docs/getting-started/) and create a Backstage application with
```
npx @backstage/create-app
```

Then, you will need to install and configure the highlights plugins for the frontend and the backend.
Frontend plugin installation can be found here: [Frontend plugin](https://github.com/RSC-Labs/backstage-highlights-plugin/tree/main/plugins/backstage-highlights-plugin)

# Backend plugin

Install:
```bash
cd packages/backend
yarn add @rsc-labs/backstage-highlights-plugin-backend
```

Create a file `packages/backend/src/plugins/highlights.ts`:
```typescript
import {
    createRouter,
  } from '@rsc-labs/backstage-highlights-plugin-backend';
  import { Router } from 'express';
  import { PluginEnvironment } from '../types';
  
  export default async function createPlugin(
    env: PluginEnvironment,
  ): Promise<Router> {
    return await createRouter({
      discovery: env.discovery,
      tokenManager: env.tokenManager,
      logger: env.logger,
      config: env.config
    });
  }
```

Add the plugin to `packages/backend/src/index.ts`:
```typescript
// import:
import highlights from './plugins/highlights';
...

async function main() {
  ...
  // add env
  const highlightsEnv = useHotMemoize(module, () => createEnv('highlights'));
  ...
  // add to router
  apiRouter.use('/highlights', await highlights(highlightsEnv));
  ...
}
```

## Catalog-info.yaml

Backend plugin supports two providers - Github and Gitlab. They are providing information for built-in fields mentioned in Frontend plugin.
Plugin uses following annotations from catalog-info.yaml:

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: example-website
  annotations:
    github.com/project-slug: rsc-labs/backstage-changelog-plugin
    gitlab.com/project-slug: owner/project
```

Both annotations are supported (so your component can be in github or gitlab). In theory case if you have both annotations, github takes precedence.

## App-config

To have properly working Github or Gitlab, you need also provide information about token and potentially about base url.
You have two options how to provide it
1) Custom highlights configuration
2) Integration configuration

Below you can find implemented both options:
```yaml
highlights:
  gitlab:
    token: ${GITLAB_TOKEN}
    apiBaseUrl: https://gitlab.com/api/v4
  github:
    token: ${GITHUB_TOKEN}

integrations:
  gitlab:
      - token: ${GITLAB_TOKEN}
  github:
      - token: ${GITHUB_TOKEN}
```

If provided, "highlights" configuration takes precendece over "integrations".
<b>Note:</b> "highlights" configuration requires providing "apiBaseUrl", while it is not needed in "integrations" (if you are using default one)

### Multiple Gitlab instances

We start supporting also multiple Gitlab instances for both highlights and integrations in app-config. Below you can find instruction and example of configuration.

1) If you would like to use "highlights" configuration, then you need to change it to a list instead of one object. Additionally, we need to be able to figure out which instance is used for which entity, so <b>host</b> annotation is needed (see example below). For backward compatibility, we still support single object.
2) Similarly with <b>integrations</b>. We already support a list, but to use multiple Gitlab instances, you need to also provide <b>host</b> and <b>apiBaseUrl</b> (see example below)

Example of both options in one configuration:
```yaml
highlights:
  gitlab:
    - host: gitlab.com
      token: ${GITLAB_TOKEN}
      apiBaseUrl: https://gitlab.com/api/v4
    - host: gitlab1.com
      token: ${GITLAB2_TOKEN}
      apiBaseUrl: https://gitlab1.com/api/v4
  github:
    token: ${GITHUB_TOKEN}

integrations:
  gitlab:
    - host: gitlab.com
      token: ${GITLAB_TOKEN}
    - host: gitlab1.com
      token: ${GITLAB2_TOKEN}
      apiBaseUrl: https://gitlab1.com/api/v4
  github:
    - host: github.com
      token: ${GITHUB_TOKEN}
```

At the same time, your entity shall have proper annotations, for example:
```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: example-website
  annotations:
    github.com/project-slug: rsc-labs/backstage-changelog-plugin
    gitlab.com/project-slug: owner/project
    gitlab.com/instance: gitlab1.com
```

Taking above example - component <b>example-website</b> will use <b>gitlab1.com</b>, which maps to values:
- host: gitlab1.com
- token: ${GITLAB2_TOKEN}
- apiBaseUrl: https://gitlab1.com/api/v4

Please remember that "highlights" configuration (if present) takes precendence over "integrations".

## TODO

[ ] Unit tests

[ ] More fields to support

## Contribution

Contributions are welcome and they are greatly appreciated!

## License

Licensed under the Mozilla Public License, Version 2.0: https://www.mozilla.org/en-US/MPL/2.0/

---

© 2023 RSC https://rsoftcon.com/