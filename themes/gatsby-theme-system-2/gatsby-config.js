const pkg = require('./package.json')

module.exports = (opts = {}) => {
  const {
    mdx = true,
  } = opts

  return {
    plugins: [
      mdx && ({
        resolve: 'gatsby-mdx',
        options: {
          extensions: ['.mdx', '.md'],
        }
      }),
      'gatsby-plugin-emotion',
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-plugin-compile-es6-packages',
        options: {
          modules: [
            pkg.name,
            'theme-ui',
          ]
        }
      },
    ].filter(Boolean),
  }
}
