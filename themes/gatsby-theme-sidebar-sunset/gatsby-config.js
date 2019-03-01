module.exports = (opts = {}) => {
  return {
    __experimentalThemes: [
      'gatsby-theme-sidebar',
    ],
    plugins: [
      {
        resolve: 'gatsby-plugin-compile-es6-packages',
        options: {
          modules: [
            'gatsby-theme-sidebar-sunset',
          ]
        }
      },
    ],
    siteMetadata: {
      sunset: {
        header: 'gatsby-theme-sidebar-sunset',
        ...opts,
      }
    }
  }
}
