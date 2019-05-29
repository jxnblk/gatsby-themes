import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'

export {
  Styled,
  css,
  Box,
  Main,
  Container,
} from 'theme-ui'

export const wrapRootElement = ({ element }) =>
  <ThemeProvider theme={theme}>
    {element}
  </ThemeProvider>

export { default as Layout } from './layout'
export { default as NavLink } from './nav-link'
export { default as Header } from './gatsby-theme-header/header'
export { default as Footer } from './gatsby-theme-footer/footer'
