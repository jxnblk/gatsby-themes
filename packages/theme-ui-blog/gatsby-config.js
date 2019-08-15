module.exports = options => ({
  plugins: [
    {
      resolve: 'gatsby-theme-blog-core',
      options
    },
    'gatsby-plugin-theme-ui',
  ]
})
