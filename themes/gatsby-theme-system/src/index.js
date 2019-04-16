import React from 'react'
import theme from './theme'
import { Global } from '@emotion/core'
import { ThemeProvider, Styled, css } from 'theme-ui'
import * as UI from 'theme-ui/layout'

export { Styled, css } from 'theme-ui'
export {
  Box,
  Main,
  Container,
} from 'theme-ui/layout'

export const wrapRootElement = ({ element, props }) =>
  <ThemeProvider theme={theme}>
    {element}
  </ThemeProvider>

export const GlobalStyles = props =>
  <Global
    styles={{
      '*': { boxSizing: 'border-box' },
      body: { margin: 0 }
    }}
  />

export const Layout = props =>
  <>
    <GlobalStyles />
    <UI.Layout
      {...props}
      css={css({
        fontFamily: 'body',
        lineHeight: 'body',
      })}
    />
  </>

export const Header = props =>
  <UI.Header
    {...props}
    css={css({
      alignItems: 'center',
      p: 3,
      color: 'background',
      bg: 'text',
    })}
  />

export const Footer = props =>
  <UI.Footer
    {...props}
    css={css({
      alignItems: 'center',
      p: 3,
      color: 'background',
      bg: 'text',
    })}
  />

export { default as NavLink } from './nav-link'
