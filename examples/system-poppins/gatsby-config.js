module.exports = {
  pathPrefix: '/examples/system-poppins',
  __experimentalThemes: [
    'gatsby-theme-system'
  ],
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins\:400,700,900`,
        ]
      }
    }
  ]
}
