module.exports = (opts = {}) => {
  return {
    plugins: [
      'gatsby-plugin-emotion',
      {
        resolve: 'gatsby-plugin-compile-es6-packages',
        options: {
          modules: [
            'gatsby-theme-configured',
          ]
        }
      },
    ],
  }
}
