const { description } = require('./package.json')

module.exports = {
  plugins: [
    'gatsby-mdx',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: [
          'gatsby-theme-rebass',
        ]
      }
    },
  ],
  siteMetadata: {
    title: 'Gatsby Theme Rebass',
    description,
  },
}
