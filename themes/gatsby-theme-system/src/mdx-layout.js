import React from 'react'
import Typography from '@styled-system/typography/modern'
import typography from './typography'

export default props => console.log(props) ||
  <Typography
    {...typography}
    {...props}>
    {props.children}
  </Typography>
