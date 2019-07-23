module.exports = (opts = {}) => {
  const {
    mdx = true,
  } = opts

  return {
    plugins: [
      'gatsby-plugin-theme-ui',
      mdx && {
        resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: [ '.mdx', '.md' ],
        }
      },
    ].filter(Boolean),
  }
}
