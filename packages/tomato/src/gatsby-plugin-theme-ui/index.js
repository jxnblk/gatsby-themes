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
        background: '#210600',
        primary: '#f88',
        secondary: '#f20',
        muted: '#000',
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
      fontSize: [5, 6],
      mt: 4,
      mb: 2,
    },
    h2: {
      variant: 'type.heading',
      fontSize: [4, 5],
      mt: 4,
      mb: 2,
    },
    h3: {
      variant: 'type.heading',
      fontSize: 4,
      mt: 3,
      mb: 1,
    },
    h4: {
      variant: 'type.heading',
      fontSize: 3,
      mt: 3,
      mb: 1,
    },
    h5: {
      variant: 'type.heading',
      fontSize: 2,
      mt: 3,
      mb: 1,
    },
    h6: {
      variant: 'type.heading',
      fontSize: 2,
      mt: 3,
      mb: 1,
    },
    p: {
      mt: 0,
      mb: 4,
    },
    pre: {
      variant: 'type.mono',
      overflow: 'auto',
      fontSize: 1,
      p: 3,
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
    blockquote: {
      fontWeight: 'bold',
      fontStyle: 'italic',
      borderLeft: t => `4px solid ${t.colors.muted}`,
      pl: 3,
      ml: 0,
      my: 4,
    },
  }
}
