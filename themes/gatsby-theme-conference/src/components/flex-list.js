import React from 'react'
import { css } from 'theme-ui'
import List from './list'

export default props =>
  <List
    {...props}
    css={css({
      display: 'flex',
      flexWrap: 'wrap',
    })}
  />
