
# gatsby-theme-brutalist

A [Theme UI][] preset theme for [Gatsby][]

```sh
npm i gatsby-theme-brutalist
```

## Usage

This theme is built with composition in mind and can be used as the basis for a custom theme or to adjust the styles in other themes.

### Composed with other themes

```js
// gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-theme-blog',
    'gatsby-theme-brutalist',
  ]
}
```

```js
// gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-theme-notes',
    'gatsby-theme-brutalist',
  ]
}
```

### As a base theme

The styles in this theme can be used as a starting point for custom themes.

```js
// gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-theme-brutalist',
    'gatsby-plugin-theme-ui',
  ]
}
```

```js
// src/gatsby-plugin-theme-ui/index.js
import baseTheme from 'gatsby-theme-brutalist'

export default {
  ...baseTheme,
  // add custom styles to override the base theme
}
```

See the [Theme UI][] docs for more info on how to use the styles in your custom theme.

MIT License

[gatsby]: https://gatsbyjs.org
[theme ui]: https://theme-ui.com
