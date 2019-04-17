module.exports = {
  pathPrefix: '/examples/conf-styled',
  __experimentalThemes: [
    'gatsby-theme-conference'
  ],
  siteMetadata: {
    title: 'Purple Conf 2019',
    description: 'The purplest conference ever',
    twitter: 'https://twitter.com/gatsbyjs',
    instagram: '',
  },
  plugins: [
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
