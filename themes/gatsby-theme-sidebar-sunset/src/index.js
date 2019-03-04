import React from 'react'
import Root from './root'

export { default as colors } from './src/colors'

// no idea how this could work
// need to sketch this out
export const wrapPageElement = ({ element, props }) =>
  <Root
    {...props}
  />
