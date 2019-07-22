/** @jsx jsx */
import { jsx, Styled, css } from 'theme-ui'
import React from 'react'
import { Global } from '@emotion/core'

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
    <div
      {...props}
      sx={{
        fontFamily: 'body',
        lineHeight: 'body',
      }}
    />
  </>

export const Header = props =>
  <header
    {...props}
    sx={{
      alignItems: 'center',
      p: 3,
      color: 'background',
      bg: 'text',
    }}
  />

export const Footer = props =>
  <footer
    {...props}
    sx={{
      alignItems: 'center',
      p: 3,
      color: 'background',
      bg: 'text',
    }}
  />

export { default as NavLink } from './nav-link'
