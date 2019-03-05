// experimental typography.js-like module for css-in-js
import merge from 'lodash.merge'

const defaults = {
  fontFamily: 'system-ui, sans-serif',
  fontSize: 16,
  lineHeight: 1.5,
  fontWeight: 'normal',
  ratio: 3,
  blockMargin: 1,
  heading: {},
  monospace: {},
}

const blockElements = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'ul',
  'ol',
  'dl',
  'dd',
  'p',
  'figure',
  'pre',
  'table',
  'fieldset',
  'blockquote',
  'form',
  'iframe',
  'img',
  'hr',
  'address',
]

const num = n => typeof n === 'number'
const px = n => num(n) ? n + 'px' : n

const applyStyles = styles => (keys = [], style = {}) => {
  keys.forEach(key => {
    styles[key] = { ...styles[key], ...style }
  })
}

const styletype = (config = {}) => {
  const {
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    ratio,
    blockMargin, // mt and mb for block-level typographic elements
    boldWeight,
    heading,
    monospace,
  } = merge(defaults, config)

  // mimick compass-vertical-rhythm
  // todo: use config.scale
  const rhythm = (n, _fontSize) => {
    // const length = n * lineHeight * fontSize
    const length = n * fontSize
    return parseFloat(length.toFixed(5))
  }

  const styles = {}

  styles[':root'] = {
    fontFamily,
    fontSize: px(fontSize),
    lineHeight: lineHeight + '',
    fontWeight,
    boxSizing: 'border-box',
  }

  // reset stuff
  // adding because typography.js includes some of this stuff
  styles.body = { margin: 0 }
  styles.img = { maxWidth: '100%', height: 'auto' }

  const my = px(rhythm(blockMargin))
  const sx = applyStyles(styles)
  sx(blockElements, {
    marginTop: my,
    marginBottom: my,
  })

  sx(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', ], {
    ...heading,
  })

  styles.blockquote = {
    marginLeft: px(rhythm(1)),
    marginRight: px(rhythm(1)),
  }
  sx([ 'b', 'strong', 'dt', 'th' ], {
    fontWeight: boldWeight,
  })

  sx([ 'ol', 'ul' ], {
    listStylePosition: 'outside',
    listStyleImage: 'none',
    marginLeft: px(rhythm(1)),
  })

  styles.li = {
    // from typography.js
    // marginBottom: `calc(${my} / 2)`
    paddingLeft: 0,
  }
  sx(['li > ol', 'li > ul'], {
    marginLeft: px(rhythm(1)),
    // marginTop: `calc(${my} / 2)`
    // marginBottom: `calc(${my} / 2)`
  })
  sx(['li > p'], {
    marginTop: 0,
    marginBottom: 0,
  })
  sx([ 'code', 'pre', 'kbd', 'samp' ], {
    fontSize: '85%',
    ...monospace,
  })

  // extras
  // abbr acronym
  // table, thead, td, th,
  const fontSizes = [
    // reverse
    3/4, // h6
    7/8, // h5
    1, // h4
    4/3, // h3
    5/3, // h2
    2, // h1
    3,
    4,
  ].map(rhythm)

  const space = [
    0,
    1/4,
    1/2,
    1,
    2,
    4,
    8,
    16,
    32,
  ].map(rhythm)

  const theme = {
    fontSizes,
    space,
  }

  return {
    // theme object
    theme,
    // components
    // style object
    styles,
    // rhythm
    rhythm,
  }
}

export default styletype
