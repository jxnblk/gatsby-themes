import React from 'react'
import get from 'lodash.get'

export default props =>
  <div
    {...props}
    css={theme => ({
      maxWidth: get(theme, 'containerWidth'),
      padding: get(theme, 'space.3'),
      marginLeft: 'auto',
      marginRight: 'auto',
    })}
  />
