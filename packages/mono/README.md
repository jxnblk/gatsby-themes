
# gatsby-theme-mono

A [Theme UI][] preset theme for [Gatsby][]

```sh
npm i gatsby-theme-mono
```

## Usage

This theme is built with composition in mind and can be used as the basis for a custom theme or to adjust the styles in other themes.

### Composed with other themes

```js
// gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-theme-blog',
    'gatsby-theme-mono',
  ]
}
```

```js
// gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-theme-notes',
    'gatsby-theme-mono',
  ]
}
```

### As a base theme

The styles in this theme can be used as a starting point for custom themes.

```js
// gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-theme-mono',
    'gatsby-plugin-theme-ui',
  ]
}
```

```js
// src/gatsby-plugin-theme-ui/index.js
import baseTheme from 'gatsby-theme-mono'

export default {
  ...baseTheme,
  // add custom styles to override the base theme
}
```

See the [Theme UI][] docs for more info on how to use the styles in your custom theme.

MIT License

[gatsby]: https://gatsbyjs.org
[theme ui]: https://theme-ui.com
