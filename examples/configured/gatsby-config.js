module.exports = {
  pathPrefix: '/examples/configured',
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-configured',
      options: {
        fonts: {
          body: '"Avenir Next", system-ui, sans-serif',
        },
        colors: {
          button: {
            text: 'black',
            background: 'cyan',
            hover: {
              background: 'magenta',
            }
          },
          header: {
            background: '#000009',
          },
          footer: {
            background: '#111119',
          }
        },
        header: {
          title: 'Configured',
        },
        navigation: [
          { name: 'Features', path: '#' },
          { name: 'Enterprise', path: '#' },
          { name: 'Pricing', path: '#' },
          { name: 'Community', path: '#' },
          { name: 'Blog', path: '#' },
          { name: 'Sign In', path: '#' },
        ],
        footer: {
          links: [
            { name: 'Features', path: '#' },
            { name: 'Enterprise', path: '#' },
            { name: 'Pricing', path: '#' },
            { name: 'Community', path: '#' },
            { name: 'Blog', path: '#' },
            { name: 'Sign In', path: '#' },
          ],
        }
      }
    },
  ],
  plugins: [
    'gatsby-mdx',
  ],
  siteMetadata: {
    title: 'Configured Example',
    description: 'An example of using gatsby-theme-configured',
  }
}
