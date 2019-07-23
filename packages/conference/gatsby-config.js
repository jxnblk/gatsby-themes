const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Conference Theme',
    description: 'A Gatsby theme for building conference sites',
    twitter: 'https://twitter.com/gatsbyjs',
    instagram: 'https://twitter.com/gatsbyjs',
  },
  mapping: {
    'ScheduleYaml.speaker': `SpeakersYaml`,
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'src/data',
        name: 'data'
      }
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: path.join(__dirname, 'src/pages'),
      }
    },
  ]
}
