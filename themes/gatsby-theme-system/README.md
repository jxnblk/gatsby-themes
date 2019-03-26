
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
  <>
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
  </>
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

The `Header` and `Footer` components default to a black background, but the colors for these and the other components can be customized using the `color` and `bg` [styled-system][] props.

```jsx
// example
<Header
  color='black'
  bg='#eee'>
  Gray Header
</Header>
```

The layout components also accept these props to customize the appearance:

- [styled-system][] space (margin and padding) props: `m`, `mt`, `mr`, `mb`, `ml`, `mx`, `my`, `p`, `pt`, `pr`, `pb`, `pl`, `px`, `py`
- `fontSize`
- `css`: [Emotion][] prop for adding any other custom styles

## Theming

By default, the System theme will add a default Emotion theming context to your site.
To customize the theming context, use Emotion's `ThemeProvider` component either directly in your layout or with Gatsby's `wrapRootElement` API.

```jsx
// example layout
import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Layout } from 'gatsby-theme-system'
import theme from '../theme'

export default props =>
  <ThemeProvider theme={theme}>
    <Layout>
      {props.children}
    </Layout>
  </ThemeProvider>
```

## ColorScheme

The `ColorScheme` component can be used to add theme-based global colors to any layout or page.

```jsx
import React from 'react'
import { ColorScheme } from 'gatsby-theme-system'

export default props =>
  <>
    <ColorScheme />
    {props.children}
  </>
```

Using [Emotion][]'s `ThemeProvider` component, the theme's colors can be customized.

```jsx
import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { ColorScheme } from 'gatsby-theme-system'

const colors = {
  text: '#112',
  background: '#fff',
  link: '#33e',
}

export default props => {
  return (
    <ThemeProvider theme={{ colors }}>
      <ColorScheme />
      {props.children}
    </ThemeProvider>
  )
}
```

### Color Abstraction

This theme uses a color abstraction to apply colors to child elements.
This abstraction works at two levels, depending on the amount of customization you'd like to add to your site.

At a higher level, these colors keys will be used to apply the color scheme to elements:

```js
// pseudocode
colors: {
  text,
  background,
  primary,
  secondary,
  muted,
  highlight,
}
```
At a slightly lower level, you can also customize colors according to this schema:

```js
// pseudocode
colors: {
  link,
  hover,
  pre: {
    text,
    background,
  },
  code: {
    text,
    background,
  },
  border,
}
```


## Typography

The `Typography` component can be used to add theme-based typography styles either globally or scoped to a `<div>`

```jsx
import React from 'react'
import { Typography } from 'gatsby-theme-system'

// Add typographic styles globally on a page
export default props =>
  <>
    <Typography />
    {props.children}
  </>
```

```jsx
import React from 'react'
import { Typography } from 'gatsby-theme-system'

// Add "scoped" typographic styles to child elements
export default props =>
  <>
    <Typography>
      {props.children}
    </Typography>
  </>
```

The typographic styles are created using [@styled-system/typography][].
These styles can be completely customized using the `theme.typography` object or by importing a pre-built theme from this package.

```js
// example theme
const theme = {
  typography: {
    h1: {
      fontSize: [ 4, 5, 6 ],
      mt: 4,
      mb: 2,
      lineHeight: 1.5,
    }
  }
}
```

To use a pre-built theme from `@style-system/typography`, import the theme and pass it as `theme.typography` to your ThemeProvider.

```js
// example pre-built theme
import poppins from '@styled-system/typography/poppins'

const theme = {
  typography: poppins,
}
```

Themes can also be deeply merged if you'd like to use one as a starting point.

```js
// example of merging typography themes
import poppins from '@styled-system/typography/poppins'
import merge from 'lodash.merge'

const theme = {
  typography: merge(poppins, {
    pre: {
      fontSize: 2,
    }
  })
}
```

<!--

TODO:

- [ ] Document full theme object schema
- [ ] Add note about shadowing `theme.js`

-->

MIT License

[mdx]: https://mdxjs.com
[emotion]: https://emotion.sh
[styled-system]: https://styled-system.com
[styled system]: https://styled-system.com
[gatsby mdx]: https://github.com/ChristopherBiscardi/gatsby-mdx
[@styled-system/typography]: https://styled-system.com/typography
