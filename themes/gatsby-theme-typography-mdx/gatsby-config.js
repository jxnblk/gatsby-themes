module.exports = {
  plugins: [
    'gatsby-mdx',
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: [
          'gatsby-theme-typography-mdx',
        ]
      }
    },
  ]
}
