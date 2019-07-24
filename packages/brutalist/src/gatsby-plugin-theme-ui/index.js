export default {
  initialColorMode: 'light',
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#00e',
    secondary: '#551a8b',
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
    heading: 'Georgia, serif',
    body: 'Verdana, sans-serif',
    monospace: 'monospace',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.5,
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
      },
    },
    h1: {
      variant: 'type.heading',
    },
    h2: {
      variant: 'type.heading',
    },
    h3: {
      variant: 'type.heading',
    },
    h4: {
      variant: 'type.heading',
    },
    h5: {
      variant: 'type.heading',
    },
    h6: {
      variant: 'type.heading',
    },
    pre: {
      variant: 'type.mono',
      overflow: 'auto',
      fontSize: 1,
      color: 'secondary',
    },
    code: {
      variant: 'type.mono',
    },
    inlineCode: {
      variant: 'type.mono',
      color: 'secondary',
    },
  }
}
