import React from 'react'
import { Global } from '@emotion/core'
import get from 'lodash.get'

const styles = theme => ({
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
    fontFamily: get(theme, 'fonts.body'),
    lineHeight: get(theme, 'lineHeights.body'),
    color: get(theme, 'colors.text'),
    backgroundColor: get(theme, 'colors.background'),
  }
})

export default props =>
  <Global
    styles={styles}
  />
