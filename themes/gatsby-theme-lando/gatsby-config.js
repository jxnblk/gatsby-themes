const pkg = require('./package.json')

module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-mdx',
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
