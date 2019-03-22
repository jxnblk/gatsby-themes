
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

To learn more about MDX, head over to the [MDX docs site][mdx].


## Layout Components

```jsx
import {
  Typography,
  ColorScheme,
  Layout,
  Header,
  Main,
  Footer,
} from 'gatsby-theme-system'
```

<!--
Most customization for this theme can be achieved by "shadowing" the layout component. Shadowing a component in a Gatsby theme means replacing the theme's built-in component with a custom one. To shadow the layout, create a directory with the same name as the theme:

```sh
mkdir src/gatsby-theme-system
```

Next, create a file named `layout.js` in the directory.

```jsx
// src/gatsby-theme-system/layout.js
import React from 'react'

export default props => {
  return (
    <div>
      {props.children}
    </div>
  )
}
```

#### Layout Components

The System theme includes several components to customize the page layout.
You can import these directly into the `layout.js` file to customize via props.

```jsx
// src/gatsby-theme-system/layout.js
import React from 'react'
import {
  Layout,
  Header,
  Main,
  Footer,
} from 'gatsby-theme-system'

export default props => {
  return (
    <Layout>
      <Header>
        Hello!
      </Header>
      <Main>
        {props.children}
      </Main>
      <Footer>
        © 2019 Me, myself, & I
      </Footer>
    </Layout>
  )
}
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

### Colors

Using [Emotion][]'s `ThemeProvider` component, the theme's colors can be customized.

```jsx
// src/gatsby-theme-system/layout.js
import React from 'react'
import { ThemeProvider } from 'emotion-theming'

const colors = {
  text: '#112',
  background: '#fff',
  link: '#33e',
}

export default props => {
  return (
    <ThemeProvider theme={{ colors }}>
      {props.children}
    </ThemeProvider>
  )
}
```

#### Color Abstraction

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

### Typography

Typography styles are largely provided with the `@styled-system/typography` package. These styles can be completely customized using the `theme.typography` object or by importing a pre-built theme from this package.

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

## Theme Options

The following can be passed to the theme's options in `gatsby-config.js`

### `mdxLayouts` (object)

Custom layouts to wrap MDX files

```js
// example gatsby-config.js
module.exports = {
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-system',
      options: {
        mdxLayouts: {
          blog: require.resolve('./src/blog-layout.js'),
        }
      }
    }
  ]
}
```
-->

[mdx]: https://mdxjs.com
[emotion]: https://emotion.sh
[styled-system]: https://styled-system.com
[styled system]: https://styled-system.com
[gatsby mdx]: https://github.com/ChristopherBiscardi/gatsby-mdx
[@styled-system/typography]: https://github.com/styled-system/styled-system/tree/master/packages/typography
