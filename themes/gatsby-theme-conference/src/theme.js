const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
  m: 0,
}

export default {
  breakpoints: [ '40em', '52em', '64em' ],
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    secondary: '#11a',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64, 96
  ],
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  styles: {
    h1: {
      ...heading,
      fontSize: [5, 6, 7],
    },
    h2: {
      ...heading,
      fontSize: [5, 6],
    },
    h3: {
      ...heading,
      fontSize: [4],
    },
    h4: {
      ...heading,
    },
    h5: {
      ...heading,
    },
    h6: {
      ...heading,
    },
    p: {
      mt: 0,
      mb: 4,
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary',
      }
    },
  }
}
