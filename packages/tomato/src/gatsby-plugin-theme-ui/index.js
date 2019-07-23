export default {
  initialColorMode: 'light',
  colors: {
    text: 'black',
    background: 'tomato',
    primary: '#110077',
    secondary: '#480c01',
    muted: '#fc5030',
    modes: {
      dark: {
        text: 'tomato',
        background: 'black',
        primary: '#f62700',
        secondary: '#ffff00',
        muted: '#260611',
      }
    }
  },
  fonts: {
    body: 'system-ui, sans-serif',
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
    heading: 900,
    bold: 700,
  },
  sizes: {
    container: 768,
  },
  type: {
    heading: {
      fontWeight: 'heading',
      lineHeight: 'heading',
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
    caps: {
      textTransform: 'uppercase',
      lettereSpacing: '0.2em',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontSize: 3,
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
      fontSize: [ 5, 6],
    },
    h2: {
      variant: 'type.heading',
      fontSize: [ 4, 5],
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
    pre: {
      variant: 'type.mono',
      overflow: 'auto',
      fontSize: 1,
      p: 3,
      // color: 'background',
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
      bg: 'muted',
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'muted',
    },
  }
}
