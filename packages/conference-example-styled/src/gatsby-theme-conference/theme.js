import theme from 'gatsby-theme-conference/src/theme'

export default {
  ...theme,
  colors: {
    ...theme.colors,
    primary: 'rebeccapurple',
    secondary: '#407',
    muted: '#f6eeff'
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
  },
  fontWeights: {
    body: 400,
    bold: 600,
    heading: 900,
  },
  styles: {
    ...theme.styles,
    h1: {
      ...theme.styles.h1,
      color: 'primary',
    },
    h2: {
      ...theme.styles.h2,
      color: 'primary',
    },
  }
}
