module.exports = {
  pathPrefix: '/examples/conference-styled',
  siteMetadata: {
    title: 'Purple Conf 2019',
    description: 'The purplest conference ever',
    twitter: 'https://twitter.com/gatsbyjs',
    instagram: '',
  },
  plugins: [
    'gatsby-theme-conference',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'poppins\:400,600,900'
        ]
      }
    }
  ]
}
