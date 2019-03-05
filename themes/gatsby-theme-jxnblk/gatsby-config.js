module.exports = {
  plugins: [
    'gatsby-mdx',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: [
          'gatsby-theme-jxnblk',
        ]
      }
    },
  ]
}
