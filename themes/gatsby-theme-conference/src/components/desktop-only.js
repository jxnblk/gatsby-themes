import React from 'react'
import { jsx } from '@emotion/core'

export default props => {
  const children = React.Children.toArray(props.children)
    .map(child => {
      return jsx(child.type, {
        ...child.props,
        css: theme => ({
          [`@media screen and (max-width: ${theme.breakpoints[1]})`]: {
            display: 'none',
          }
        })
      })
    })

  return (
    <>
      {children}
    </>
  )
}
