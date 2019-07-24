const path = require('path')

module.exports = {
  plugins: [
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: path.resolve('src/posts'),
      }
    },
  ]
}
