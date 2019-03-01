module.exports = {
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
  ]
}
