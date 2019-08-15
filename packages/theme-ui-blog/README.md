
# gatsby-theme-ui-blog

Minimal Gatsby MDX blog theme built with Theme UI

```sh
npm i gatsby-theme-ui-blog
```

```js
// gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-theme-ui-blog',
  ]
}
```

## Shadowing

Shadow the following components to customize styles and page layout:

Component | Description | Props
---|---|---
`src/gatsby-theme-ui-blog/posts.js` | Index page for all blog posts | `{ posts }`
`src/gatsby-theme-ui-blog/post.js` | Full blog post article page | `{ title, date, children, keywords, tags }`
`src/gatsby-theme-ui-blog/layout.js` | Wrapping layout component for the Post and Posts components || all page-level props

## Theming

Use `gatsby-plugin-theme-ui` to override or customize the theme.

```sh
npm i gatsby-plugin-theme-ui
```

```js
// gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-theme-ui-blog',
    'gatsby-plugin-theme-ui',
  ]
}
```

```js
// shadow src/gatsby-plugin-theme-ui/index.js
import base from 'gatsby-theme-ui-blog/src/gatsby-plugin-theme-ui'

export default {
  ...base,
  colors: {
    text: 'white',
    background: 'black',
    primary: 'cyan',
    secondary: 'magenta',
  }
}
```

## Options

This theme is based off of [gatsby-theme-blog-core][] and uses all the same options.

[gatsby-theme-blog-core]: https://www.npmjs.com/package/gatsby-theme-blog-core
