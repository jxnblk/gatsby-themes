import React from 'react'
import ColorProvider from 'color-provider'
import colors from './colors'

const Root = props => {
  return (
    <ColorProvider colors={colors}>
      {props.children}
    </ColorProvider>
  )
}

export const wrapPageElement = ({ element, props }) =>
  <Root {...props}>
    {element}
  </Root>
