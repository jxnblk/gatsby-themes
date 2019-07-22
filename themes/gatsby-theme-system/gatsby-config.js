const pkg = require('./package.json')

module.exports = (opts = {}) => {
  const {
    mdx = true,
  } = opts

  return {
    plugins: [
      mdx && ({
        resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: ['.mdx', '.md'],
        }
      }),
      'gatsby-plugin-theme-ui',
    ].filter(Boolean),
  }
}
