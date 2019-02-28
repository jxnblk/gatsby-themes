import React from 'react'

export default ({
  maxWidth,
  padding = 32,
  ...props
}) =>
  <div
    {...props}
    css={{
      maxWidth,
      minWidth: 0,
      width: '100%',
      flex: '1 1 auto',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: padding,
      paddingRight: padding,
    }}
  />
