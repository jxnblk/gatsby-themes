import React from 'react'
import { Styled, css } from 'theme-ui'

export default props =>
  <Styled
    {...props}
    css={css({
      display: 'inline-block',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      '&:hover': {
        color: 'primary',
      },
      '& > svg': {
        display: 'inline-block',
        verticalAlign: 'middle',
      }
    })}
  />
