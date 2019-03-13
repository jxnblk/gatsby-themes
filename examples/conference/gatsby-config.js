module.exports = {
  pathPrefix: '/examples/conference',
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-configured',
      options: {
        fonts: {
          body: '"Avenir Next", system-ui, sans-serif',
          heading: 'Baskerville, Georgia, serif',
        },
        colors: {
          header: {
            background: '#000009',
          },
          footer: {
            background: '#111119',
          }
        },
        header: {
          title: 'Best Conference Ever',
          button: {
            text: 'Buy Tickets',
            path: '#register'
          }
        },
        navigation: [
          { name: 'Speakers', path: '#' },
          { name: 'Venue', path: '#' },
          { name: 'Schedule', path: '#' },
          { name: 'Sponsors', path: '#' },
        ],
        footer: {
          links: [
            { name: 'Speakers', path: '#' },
            { name: 'Venue', path: '#' },
            { name: 'Schedule', path: '#' },
            { name: 'Sponsors', path: '#' },
          ],
          social: {
            twitter: 'jxnblk',
            instagram: 'jxnblk',
          },
        }
      }
    },
  ],
  plugins: [
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: [ '.mdx', '.md' ],
      }
    },
  ],
  siteMetadata: {
    title: 'Best Conference Ever ',
    description: 'Get your best-night-ever face ready, ’cause, this is the best conference ever!',
  }
}
