export default {
  initialColorMode: 'light',
  colors: {
    text: '#111126',
    background: '#fff',
    primary: '#33e',
    secondary: '#e3e',
    muted: '#f6f6f9',
    modes: {
      dark: {
        text: '#fff',
        background: '#353944',
        primary: '#3cf',
        secondary: '#39c',
        muted: '#2d313a',
      }
    }
  },
  fonts: {
    body: '"Roboto Mono", Menlo, monospace',
    heading: 'inherit',
    monospace: '"Roboto Mono", Menlo, monospace',
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64,
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
      letterSpacing: '0.2em',
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
      fontSize: 5,
    },
    h2: {
      variant: 'type.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'type.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'type.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'type.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'type.caps',
      fontSize: 0,
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
