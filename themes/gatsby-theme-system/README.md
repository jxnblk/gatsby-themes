
# gatsby-theme-system

A minimalist Gatsby theme based on constraint-based design principles

```sh
npm i gatsby-theme-system
```

## Features

- [MDX][]
- [Emotion][]
- [Styled System][]
- System Font Stack
- Customizable layout, colors & typography

## Getting Started

In your `gatsby-config.js`, add the theme:

```js
// gatsby-config.js
module.exports = {
  __experimentalThemes: [
    'gatsby-theme-system',
  ],
}
```

## MDX

MDX allows you to import and use React components directly in markdown.
The System theme includes support for [MDX][] out of the box, using [Gatsby MDX][].
Any file with the `.mdx` extension in `src/pages/` will be rendered as a page.

To disable MDX support, set the `mdx` option to `false` in the theme configuration.

```js
// gatsby-config.js
module.exports = {
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-system',
      options: {
        mdx: false,
      }
    }
  ]
}
```

To learn more about MDX, head over to the [MDX docs site][mdx].

## Layout Components

To use the System theme's layout components in your site, import the components from the theme and use them to create custom layouts.

```jsx
// example custom layout
import React from 'react'
import {
  Layout,
  Header,
  Main,
  Footer,
} from 'gatsby-theme-system'

export default props =>
  <Layout>
    <Header>
      Hello, Header!
    </Header>
    <Main>
      {props.children}
    </Main>
    <Footer>
      © 2019 Jxnblk
    </Footer>
  </Layout>
```

This custom layout component can then be imported into any existing page.

```jsx
// example page
import React from 'react'
import Layout from '../layouts/main'

export default props =>
  <Layout>
    <h1>Hello</h1>
    <p>
      This page has a layout
    </p>
  </Layout>
```

The `Header` and `Footer` components default to a black background, but the colors for these and the other components can be customized using the `css` prop.

```jsx
// example
<Header
  css={{
    color: 'black',
    backgroundColor: '#eee',
  }}>
  Gray Header
</Header>
```

## Theming

By default, the System theme will add a default Emotion theming context to your site.
To customize the theming context, shadow the `colors.js`, `styles.js`, or `theme.js` modules.

### Colors

This theme uses a color abstraction to apply colors to child elements.
These colors keys will be used to apply the color scheme to elements:

```js
// pseudocode
colors: {
  text,
  background,
  primary,
  secondary,
  muted,
}
```

<!-- TODO:
- [ ] Document full theme object schema
- [ ] Add docs about shadowing `theme.js`
- [ ] NavLink
-->

MIT License

[mdx]: https://mdxjs.com
[emotion]: https://emotion.sh
[styled-system]: https://styled-system.com
[styled system]: https://styled-system.com
[gatsby mdx]: https://github.com/ChristopherBiscardi/gatsby-mdx
[theme-ui]: https://github.com/system-ui/theme-ui
