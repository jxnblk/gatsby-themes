import React from 'react'
import { css } from 'theme-ui'

export default ({
  src,
  ratio = 1,
  ...props
}) =>
  <div
    {...props}
    css={css({
      width: '100%',
      height: 0,
      pb: (ratio * 100) + '%',
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    })}
  />
