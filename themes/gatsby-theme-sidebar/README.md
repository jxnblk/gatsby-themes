
# gatsby-theme-sidebar

A general-purpose Gatsby theme for creating sidebar layouts

```sh
npm i gatsby-theme-sidebar
```

## Getting Started

In your site's `gatsby-config.js` file, add the theme:

```js
module.exports = {
  __experimentalThemes: [
    'gatsby-theme-sidebar'
  ]
}
```

## Configuration

Most of this theme's configuration can be handled by shadowing (or replacing) the theme's `Root` component.
To shadow the `Root` component add a file named `src/gatsby-theme-sidebar/root.js` to your site.

In this file, export a new component to override the theme's default.

```jsx
// src/gatsby-theme-sidebar/root.js
import React from 'react'

export default ({
  Layout,
  Header,
  Main,
  Sidebar,
  Content,
  Footer,
  ...props
}) =>
  <Layout>
    <Header>
      your custom header content
    </Header>
    <Main>
      <Sidebar>
        your custom sidebar content
      </Sidebar>
      <Content>
        {props.children}
      </Content>
    </Main>
    <Footer>
      your custom footer content
    </Footer>
  </Layout>
```

The `Root` component is passed several layout components to make customization simple.
Each component includes some minimal base styles for positioning and layout.

### Compositions

These layout components can work with several different configurations. Here are a few examples (without children to aid in readability):

```jsx
// without a footer
<Layout>
  <Header />
  <Main>
    <Sidebar />
    <Content />
  </Main>
</Layout>
```

```jsx
// without a header
<Layout>
  <Main>
    <Sidebar />
    <Content />
  </Main>
  <Footer />
</Layout>
```

```jsx
// more examples to come...
// without a sidebar
// with max-widths
// with sidebar on the right
```

### Custom Styles

To customize the style for a single component, use Emotion's `css` prop.

```jsx
<Sidebar
  css={{
    backgroundColor: '#f6f6f6',
  }}>
</Sidebar>
```



