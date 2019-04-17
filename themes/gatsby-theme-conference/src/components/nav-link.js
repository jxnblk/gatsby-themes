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
      whiteSpace: 'nowrap',
      flex: 'none',
      px: 3,
      py: 2,
    })}
  />
