import React from 'react'
import { Styled, css } from 'theme-ui'

export default props =>
  <Styled.a
    {...props}
    css={css({
      display: 'inline-block',
      color: 'inherit',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      flex: 'none',
      fontWeight: 'bold',
      px: 3,
      py: 3,
      color: 'background',
      bg: 'primary',
      borderRadius: 4,
    })}
  />
