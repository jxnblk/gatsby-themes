import React from 'react'
import { jsx } from 'theme-ui'

export default props => {
  const children = React.Children.toArray(props.children)
    .map((child, i) => {
      return jsx(child.type, {
        key: i,
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
