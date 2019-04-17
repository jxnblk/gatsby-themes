module.exports = {
  pathPrefix: '/examples/conf-styled',
  __experimentalThemes: [
    'gatsby-theme-conference',
    '@jxnblk/gatsby-theme-mdx-blog',
  ],
  siteMetadata: {
    title: 'Purple Conf 2019',
    description: 'The purplest conference ever',
    twitter: 'https://twitter.com/gatsbyjs',
    instagram: '',
  },
  plugins: [
    'gatsby-plugin-shadowing-analyzer',
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
