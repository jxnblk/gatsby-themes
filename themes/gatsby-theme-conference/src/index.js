import React from 'react'
import { ComponentProvider } from 'theme-ui'
import theme from './theme'

export { Styled, css } from 'theme-ui'
export { Box, Flex, Container } from 'theme-ui/layout'
export { default as useSiteMetadata } from './use-site-metadata'
export * from './components'

export const wrapPageElement = ({ element, props }) =>
  <ComponentProvider theme={theme}>
    {element}
  </ComponentProvider>
