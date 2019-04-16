const path = require('path')
const pkg = require('./package.json')

module.exports = {
  siteMetadata: {
    title: 'Conference Theme',
    description: 'A Gatsby theme for building conference sites',
    twitter: 'https://twitter.com/gatsbyjs',
    instagram: 'https://twitter.com/gatsbyjs',
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'src/data',
        name: 'data'
      }
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: [
          pkg.name,
          'theme-ui',
        ]
      }
    },
  ]
}
