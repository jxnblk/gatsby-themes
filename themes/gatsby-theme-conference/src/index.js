import React from 'react'
import { ComponentProvider } from 'theme-ui'
import theme from './theme'

export const wrapPageElement = ({ element, props }) =>
  <ComponentProvider theme={theme}>
    {element}
  </ComponentProvider>
