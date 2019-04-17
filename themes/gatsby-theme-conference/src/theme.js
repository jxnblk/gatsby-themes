const heading = {
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
  },
  fonts: {
    body: 'system-ui, sans-serif',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  fontWeights: {
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
      fontSize: [4, 5, 6],
    },
    h3: {
      ...heading,
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
  }
}
