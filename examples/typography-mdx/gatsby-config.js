module.exports = {
  pathPrefix: '/examples/typography-mdx',
  __experimentalThemes: [
    'gatsby-theme-typography-mdx'
  ],
  plugins: [
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'montserrat:700',
          'arvo:400,400i,700',
        ]
      }
    },
  ]
}
