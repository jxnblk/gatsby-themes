const path = require('path')
const pkg = require('./package.json')

module.exports = {
  plugins: [
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
        path: path.join(__dirname, 'src/templates'),
      },
    },
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: [
          pkg.name,
        ]
      }
    },
  ]
}
