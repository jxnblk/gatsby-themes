import React, { useContext } from 'react'
import styled from '@emotion/styled'
import {
  ComponentProvider,
} from 'emotion-mdx'
import css from '@styled-system/css'
import { width } from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'
import get from 'lodash.get'

import { ThemeContext } from '@emotion/core'

const heading = styles => ({
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  ...styles
})

export const theme = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#05a',
    muted: '#f9f9f9',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },

  // layout "blocks"
  layout: {
    root: {},
    header: {},
    main: {},
    sidebar: {},
    container: {},
    footer: {},
  },

  // mdx components/etc. (name tbd)
  styles: {
    h1: heading({
      fontSize: 6,
    }),
    h2: heading({
      fontSize: 5,
    }),
    h3: heading({
      fontSize: 4,
    }),
    h4: heading({
      fontSize: 3,
    }),
    p: {},
    a: {},
    img: {},
  },
}

export const ThemeProvider = props =>
  <ComponentProvider {...props} />

ThemeProvider.defaultProps = {
  theme,
}

export const block = name => props => {
  const theme = props.theme || props
  return css(get(theme, 'layout.' + name))({ theme })
}

export const Box = styled('div', {
  shouldForwardProp,
})({
},
  props => css(props.sx)(props),
  props => block(props.block)(props),
  width
)

export const Root = props =>
  <Box
    {...props}
    block='root'
    sx={{
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      color: 'text',
      bg: 'background',
      ...props.sx
    }}
  />

export const Header = props =>
  <Box
    {...props}
    block='header'
  />

export const Footer = props =>
  <Box
    {...props}
    block='footer'
  />

export const Main = props =>
  <Box
    {...props}
    block='main'
    sx={{
      flex: '1 1 auto',
    }}
  />

export const Container = props =>
  <Box
    {...props}
    block='container'
    sx={{
      p: 4,
      mx: 'auto',
      width: '100%',
      maxWidth: 1024,
      ...props.sx,
    }}
  />

export const DebugTheme = props => {
  const theme = useContext(ThemeContext)
  console.log(theme)
  return false
}
