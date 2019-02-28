import React from 'react'
import { TypographyProvider } from 'typography-system'
import merge from 'lodash.merge'
import fairyGates from 'typography-theme-fairy-gates'
import config from './config'

const theme = merge({
  // defaults
}, config.theme)

export const wrapPageElement = ({ element, props }) =>
  <TypographyProvider theme={theme}>
    {element}
  </TypographyProvider>
