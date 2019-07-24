module.exports = {
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'roboto mono\:400,400i,700',
        ],
        display: 'swap',
      }
    }
  ]
}
