module.exports = (opts = {}) => {
  const {
    mdx = true,
  } = opts

  return {
    __experimentalThemes: [
      'gatsby-theme-header',
      'gatsby-theme-footer',
    ],
    plugins: [
      mdx && ({
        resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: ['.mdx', '.md'],
        }
      }),
      // todo: is this needed?
      // 'gatsby-plugin-emotion',
    ].filter(Boolean),
  }
}
