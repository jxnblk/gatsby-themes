import React from 'react'
import { Helmet } from 'react-helmet'
import { Global } from '@emotion/core'
import { ThemeProvider, withTheme } from 'emotion-theming'
import get from 'lodash.get'
import merge from 'lodash.merge'
import { useSiteMetadata } from './hooks'
// theming
import { ColorScheme } from './components'
import modern from '@styled-system/typography/modern'
import Layout from './layout'

const colors = {
  text: '#000',
  background: '#fff',
  primary: '#07c',
  secondary: '#047',
  // highlight: '',
  muted: '#f0f6f9',
}
const fonts = {
  body: 'system-ui, sans-serif',
  monospace: 'Menlo, monospace',
}
const typography = {
  ...modern,
  scoped: true,
}

const theme = userTheme => merge({
  fonts,
  colors,
  typography,
}, userTheme)

const styles = theme => ({
  '*': { boxSizing: 'border-box' },
  body: {
    margin: 0,
    color: get(theme, 'colors.text', '#000'),
    backgroundColor: get(theme, 'colors.background', '#fff'),
    ...(theme.typography.body || {})
  },
  a: {
    color: get(theme, 'colors.link'),
  }
})

const GoogleFonts = withTheme(props => {
  const { googleFonts } = props.theme.typography || {}
  if (!googleFonts) return false
  return (
    <Helmet>
      <link
        rel='stylesheet'
        href={googleFonts}
      />
    </Helmet>
  )
})

const Root = props => {
  const {
    title,
    description
  } = useSiteMetadata()

  return (
    <Layout {...props}>
      <ThemeProvider theme={theme}>
        <Helmet>
          <title>{title}</title>
          <meta name='description' content={description} />
        </Helmet>
        <GoogleFonts />
        <Global styles={styles} />
        <ColorScheme>
          {props.children}
        </ColorScheme>
      </ThemeProvider>
    </Layout>
  )
}

export const wrapPageElement = ({ element, props }) =>
  <Root {...props}>
    {element}
  </Root>

export * from './components'
