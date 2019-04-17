import React from 'react'
import { Styled, css } from 'theme-ui'

export default props =>
  <Styled.ul
    {...props}
    css={css({
      listStyle: 'none',
      p: 0,
    })}
  />
