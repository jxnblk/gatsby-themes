import React from 'react'
import Link from './link'
import get from 'lodash.get'

export default props =>
  <Link
    {...props}
    css={theme => ({
      appearance: 'none',
      textDecoration: 'none',
      display: 'inline-block',
      fontFamily: 'inherit',
      fontSize: get(theme, 'fontSizes.1'),
      fontWeight: get(theme, 'fontWeights.bold'),
      paddingLeft: get(theme, 'space.3'),
      paddingRight: get(theme, 'space.3'),
      paddingTop: get(theme, 'space.2'),
      paddingBottom: get(theme, 'space.2'),
      borderRadius: get(theme, 'radius'),
      border: 'none',
      color: get(theme, 'colors.button.text'),
      backgroundColor: get(theme, 'colors.button.background'),
      '&:hover': {
        color: get(theme, 'colors.button.hover.text'),
        backgroundColor: get(theme, 'colors.button.hover.background'),
      }
    })}
  />
