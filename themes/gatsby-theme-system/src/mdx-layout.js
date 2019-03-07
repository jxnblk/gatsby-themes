import React from 'react'
import Typography from '@styled-system/typography/modern'
import typography from './typography'

export default props =>
  <Typography
    {...typography}
    {...props}>
    {props.children}
  </Typography>
