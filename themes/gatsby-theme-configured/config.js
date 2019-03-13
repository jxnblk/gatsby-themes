// default theme config
const black = '#000'
const blue = '#07c'
const darkblue = '#05a'
const lightgray = '#f6f6f9'

const colors = {
  primary: blue,
  secondary: darkblue,
  text: black,
  background: 'white',
  link: blue,
  hover: darkblue,
  button: {
    text: 'white',
    background: blue,
    hover: {
      text: 'inherit',
      background: darkblue,
    },
  },
  heading: black,
  border: lightgray,
  pre: {
    text: blue,
    background: lightgray,
  },
  code: {
    text: blue,
    background: 'transparent',
  },
  header: {
    text: 'white',
    background: black,
  },
  footer: {
    text: 'white',
    background: black,
  },
}

module.exports = {
  // styles
  colors,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64, 96, 128,
  ],
  fontWeights: {
    normal: 400,
    bold: 700,
    heading: 700,
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256, 512,
  ],
  radius: 2,
  containerWidth: 1024,
  breakpoint: 640,
  // content
  header: {
    logo: {
      src: 'logo.svg',
      width: 32,
      height: 32
    },
    title: 'Gatsby Theme All Config',
    button: {
      text: 'Sign Up',
      path: '#',
    }
  },
  navigation: [
    { path: '/', name: 'Home' },
    { path: 'https://github.com/jxnblk/gatsby-themes', name: 'GitHub' },
  ],
  footer: {
    colophon: '© 2019 Brent Jackson',
    links: [
      { path: '/', name: 'Home' },
      { path: '/', name: 'GitHub' },
    ],
    social: {
      twitter: 'jxnblk',
      facebook: 'jxnblk',
      instagram: 'jxnblk',
    },
  }
}

