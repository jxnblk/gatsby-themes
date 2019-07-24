# gatsby-theme-system

A minimalist Gatsby theme based on constraint-based design principles

```sh
npm i gatsby-theme-system
```

## Features

- [MDX][]
- [Theme UI][]
- Customizable layout, colors & typography
- Built-in page layout component
- MDX header and footer content

## Getting Started

In your `gatsby-config.js`, add the theme:

```js
// gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-theme-system',
  ],
}
```

## Theming

Shadow the `src/gatsby-plugin-theme-ui/index.js` file to customize the theme.

## Header and Footer

Shadow the `src/gatsby-theme-system/header.mdx` and `src/gatsby-theme-system/footer.mdx` files to customize the content in the header and footer.

MIT License

[mdx]: https://mdxjs.com
[emotion]: https://emotion.sh
[styled system]: https://styled-system.com
[gatsby mdx]: https://github.com/ChristopherBiscardi/gatsby-mdx
[theme ui]: https://github.com/system-ui/theme-ui
