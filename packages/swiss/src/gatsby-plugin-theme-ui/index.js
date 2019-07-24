export default {
  initialColorMode: 'light',
  colors: {
    text: 'black',
    background: 'white',
    primary: '#1100ff',
    secondary: '#ff3300',
    muted: '#e9f6ff',
    modes: {
      dark: {
      }
    }
  },
  fonts: {
    body: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    14, 16, 18, 20, 24, 32, 48, 64,
  ],
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  sizes: {
    container: 768,
  },
  type: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      my: 3,
      a: {
        color: 'inherit',
        ':hover,:focus': {
          color: 'primary',
        }
      }
    },
    mono: {
      fontFamily: 'monospace',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
      ':hover,:focus': {
        color: 'secondary',
      }
    },
    h1: {
      variant: 'type.heading',
      fontSize: [5, 6],
    },
    h2: {
      variant: 'type.heading',
      fontSize: [4, 5],
    },
    h3: {
      variant: 'type.heading',
      fontSize: 4,
    },
    h4: {
      variant: 'type.heading',
      fontSize: 3,
    },
    h5: {
      variant: 'type.heading',
      fontSize: 2,
    },
    h6: {
      variant: 'type.heading',
      fontSize: 2,
    },
    p: {
      my: 4,
    },
    pre: {
      variant: 'type.mono',
      overflow: 'auto',
      fontSize: 0,
      p: 3,
      my: 4,
      color: 'primary',
      bg: 'muted',
      borderRadius: 2,
    },
    code: {
      variant: 'type.mono',
    },
    inlineCode: {
      variant: 'type.mono',
      color: 'primary',
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'muted',
      my: 4,
    },
    blockquote: {
      fontSize: 3,
      fontWeight: 'bold',
      fontStyle: 'italic',
      borderLeft: '8px solid',
      pl: 3,
      ml: 0,
      my: 4,
    },
  }
}
