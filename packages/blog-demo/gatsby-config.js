const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-blog',
      options: {
        // absolute dirnames are created in the site
        contentPath: path.resolve(
          path.join(__dirname, 'content/posts')
        ),
        assetPath: path.resolve(
          path.join(__dirname, 'content/assets')
        ),
      }
    }
  ]
}
