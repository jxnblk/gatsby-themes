
# gatsby-theme-layout

**EXPERIMENTAL**

A Gatsby theme for adding customizable layout components to your Gatsby theme.

Use this theme when building your own Gatsby theme to allow the end user to completely customize the header, footer, or sidebar.

[latent shadowing]: https://johno.com/latent-component-shadowing

## Getting Started

Install `gatsby-theme-layout` as a dependency in your theme.

```sh
npm i gatsby-theme-layout
```

Add the theme to your `gatsby-config.js`.

```js
// gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-theme-layout',
  ],
}
```

In pages created by your theme, import and use the header and footer components where appropriate.
These components render nothing by default.

```js
// example layout component
import React from 'react'
import { Layout, Header, Footer } from 'gatsby-theme-layout'

export default props =>
  <Layout>
    <Header />
    {/* put your theme's content here */}
    <Footer />
  </Layout>
```

This allows the page layout around your theme's pages to be customized by the end user through shadowing.

## Customizing the Layout

When consuming a theme that uses `gatsby-theme-layout`, shadow the `src/gatsby-theme-layout` modules to customize the page layout.

```js
// src/gatsby-theme-layout/header.js
```

```js
// src/gatsby-theme-layout/footer.js
```

TK
