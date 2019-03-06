module.exports = {
  pathPrefix: '/examples/fullwidth-sidebar',
  __experimentalThemes: [
    'gatsby-theme-sidebar'
  ],
  plugins: [
    'gatsby-mdx',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/typography'
      }
    },
  ]
}
