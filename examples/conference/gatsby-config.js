const pink = '#e3f'
const purple = '#0c0047'
const blue = '#53f'

module.exports = {
  pathPrefix: '/examples/conference',
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-configured',
      options: {
        fonts: {
          body: 'Poppins, "Avenir Next", system-ui, sans-serif',
          heading: '"Roboto Mono", Menlo, monospace',
          monospace: '"Roboto Mono", Menlo, monospace',
        },
        colors: {
          primary: blue,
          secondary: pink,
          link: blue,
          hover: '#42c',
          button: {
            text: '#fff',
            background: blue,
            hover: {
              background: '#42c',
            }
          },
          header: {
            text: 'inherit',
            background: '#fff',
          },
          footer: {
            text: pink,
            // background: '#111119',
            background: purple,
          }
        },
        radius: 6,
        header: {
          logo: {
            src: '',
          },
          title: 'Best Conference Ever',
          button: {
            text: 'Buy Tickets',
            path: '#register'
          }
        },
        navigation: [
          { name: 'Speakers', path: '#speakers' },
          { name: 'Venue', path: '#venue' },
          { name: 'Schedule', path: '#schedule' },
          { name: 'Sponsors', path: '#sponsors' },
        ],
        footer: {
          links: [
            { name: 'Speakers', path: '#speakers' },
            { name: 'Venue', path: '#venue' },
            { name: 'Schedule', path: '#schedule' },
            { name: 'Sponsors', path: '#sponsors' },
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
    'gatsby-plugin-react-helmet',
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
