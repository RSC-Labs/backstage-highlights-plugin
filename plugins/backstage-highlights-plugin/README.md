# @rsc-labs/backstage-highlights-plugin

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
Backend plugin installation can be found here: [Backend plugin](https://github.com/RSC-Labs/backstage-highlights-plugin/tree/main/plugins/backstage-highlights-plugin-backend)

# Frontend plugin

Install:
```bash
cd packages/app
yarn add @rsc-labs/backstage-highlights-plugin
```

### Card:

Add the card to `packages/app/src/components/catalog/EntityPage.tsx`:
```jsx
// import:
import { EntityHighlightsCard } from '@rsc-labs/backstage-highlights-plugin';

// use it in entity view
const overviewContent = (
  <Grid container
  ...
    <Grid item md={12} xs={12}>
      <<EntityHighlightsCard />
    </Grid>
  </Grid>
)
```

For the best UX we <b> strongly recommend </b> to use as much horizontal space as possible. Thanks to that you will have your highlights on top of your page as a bar.

<img src='https://raw.githubusercontent.com/RSC-Labs/backstage-highlights-plugin/main/docs/built_in_example.PNG' alt='Built-in example'>

Of course, you can also make it smaller and near the other card.

### Built-in fields

At this moment, "highlights plugin" comes with built-in support of basic information about Git. As you can see in above picture, we support following fields:
- latest tag
- number of branches
- latest commit
- date of latest commit
- author of latest commit
- clone button

You can click at the field and get more information. For example, when you click on latest tag you will get longer history:

<img src='https://raw.githubusercontent.com/RSC-Labs/backstage-highlights-plugin/main/docs/commit_table.PNG' alt='Built-in example'>

Other fields can have similar functionality, but it depends on the provider (Github API provides more information)

At this moment built-in fields supports Github and Gitlab (see: Configuration of Backend).

## Frontend configuration

By default, you can use EntityHighlights without any parameter - it gives you above built-in fields.
However, you may want change a behaviour or implement your custom fields.
Below you can find an interface:

```typescript
/** @public */
export interface EntityHighlightsProps {
    fields? : EHighlightFields[],
    customFields?: HighlightCustomField[]
}
```

1) fields - this parameter describes what built-in you would like to see and in what order
2) customFields - this parameter can let you define your own field. Every custom field contains:
    - fieldLabel - it is a title of the field (you can see it in built-in fields). It is optional parameter as your field can be also without a title (example: Clone button in built-in fields)
    - field - it is simple React component

## TODO

[ ] Unit tests

[ ] More fields to support

## Contribution

Contributions are welcome and they are greatly appreciated!

## License

Licensed under the Mozilla Public License, Version 2.0: https://www.mozilla.org/en-US/MPL/2.0/

---

© 2023 RSC https://rsoftcon.com/