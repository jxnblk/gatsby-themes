export default {
  initialColorMode: 'light',
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    muted: 'hsla(0, 0%, 0%, .0625)',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        muted: 'hsla(0, 0%, 100%, .0625)',
      },
    },
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
  },
  fontSizes: [
    14, 16, 18, 20, 24, 32, 64
  ],
  sizes: {
    container: 768,
  },
  type: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      mt: 5,
      mb: 2,
      a: {
        color: 'inherit',
      }
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 2,
    },
    h1: {
      variant: 'type.heading',
      fontSize: 6,
    },
    h2: {
      variant: 'type.heading',
      fontSize: 5,
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
      fontSize: 1,
    },
    a: {
      color: 'primary',
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
    blockquote: {
      fontWeight: 'bold',
      mx: 0,
      my: 5,
      pl: 3,
      borderLeft: '4px solid',
    },
    p: {
      my: 3,
    },
    ol: {
      my: 3,
    },
    ul: {
      my: 3,
    },
  },
}
