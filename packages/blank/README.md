
# gatsby-theme-blank

**WIP** A bare-bones, unstyled MDX blog theme for Gatsby

This theme in intended for use as a base (i.e. parent) theme which can be used to create custom blog themes.

## Usage

```sh
npm i gatsby-theme-blank
```

In your own theme's `gatsby-config.js`, add this theme to the `plugins` array.

```js
// gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-theme-blank',
  ]
}
```

Add other plugins as needed, and shadow these components to customize the presentation layer:

- `src/gatsby-theme-blank/components/posts.js`: root-level index page
- `src/gatsby-theme-blank/components/post.js`: post detail page

In the consuming site, add `.mdx` files to the `src/posts/` directory to add blog posts.

**Notes:**

- The implementation details in `gatsby-node.js` are likely to change in the near future, but the outward API should stay the same.
- Posts are ordered by an exported `date` value *or* a `date` frontmatter field
- Titles are derived from the first heading found in the MDX document

This theme does **not**:

- Include any styling
- Include features like RSS, authors, image processing, etc.
- Include any additional theme options
