import React from 'react'
import { Styled, css } from 'theme-ui'

export default props =>
  <Styled.a
    {...props}
    css={css({
      diplay: 'inline-block',
      color: 'inherit',
      textDecoration: 'none',
      fontWeight: 'bold',
      px: 3,
      py: 2,
    })}
  />
