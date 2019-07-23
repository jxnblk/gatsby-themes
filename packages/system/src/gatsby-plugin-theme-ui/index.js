export const theme = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#047',
    muted: '#f0f6f9',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  fontWeight: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  layout: {
    mdx: {
      ul: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        p: 0,
        m: 0,
        mx: -3,
      },
      li: {
        p: 3,
        a: {
          m: -3,
        }
      },
      a: {
        display: 'block',
        p: 3,
        fontWeight: 'bold',
        color: 'inherit',
        textDecoration: 'none',
        ':hover,:focus': {
          color: 'inherit',
          bg: 'primary',
        }
      }
    },
    header: {
      variant: 'layout.mdx',
    },
    main: {},
    container: {
      width: '100%',
      maxWidth: 768,
      mx: 'auto',
      px: 3,
    },
    footer: {
      variant: 'layout.mdx',
      fontSize: 1,
    },
  },
  type: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary',
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: '87.5%',
      color: 'secondary',
      bg: 'muted',
    },
    pre: {
      p: 3,
      color: 'secondary',
      bg: 'muted',
      borderRadius: 2,
      overflowX: 'auto',
    },
    inlineCode: {
      fontFamily: 'monospace',
      fontSize: '87.5%',
      color: 'secondary',
      bg: 'muted',
    },
    hr: {
      borderColor: 'muted',
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
  },
}
console.log('shadowed theme', theme)

export default theme
