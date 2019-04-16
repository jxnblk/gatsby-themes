import React from 'react'
import { Styled, css } from 'theme-ui'

export default props =>
  <Styled.a
    {...props}
    css={css({
      display: 'inline-block',
      color: 'inherit',
      fontWeight: 'bold',
      textDecoration: 'none',
      px: 3,
      py: 2,
    })}
  />
