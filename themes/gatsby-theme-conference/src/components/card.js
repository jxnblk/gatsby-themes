import React from 'react'
import { Styled, css } from 'theme-ui'

export default ({
  width = 320,
  ...props
}) =>
  <Styled.div
    {...props}
    css={css({
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: width,
      p: 2,
    })}
  />
