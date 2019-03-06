import React from 'react'
import { Helmet } from 'react-helmet'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import get from 'lodash.get'
import merge from 'lodash.merge'
import { useSiteMetadata } from './hooks'

// theming
import colors from './colors'
import typography from './typography'
import Layout from './layout'

const theme = userTheme => merge({
  colors,
  typography,
}, userTheme)

const styles = theme => ({
  '*': { boxSizing: 'border-box' },
  body: {
    margin: 0,
    fontFamily: 'system-ui, sans-serif',
    lineHeight: 1.5,
    color: get(theme, 'colors.text', '#000'),
    backgroundColor: get(theme, 'colors.background', '#fff'),
  },
  a: {
    color: get(theme, 'colors.link'),
  }
})

const Root = props => {
  const {
    title,
    description
  } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>
      <Layout {...props}>
        <ThemeProvider theme={theme}>
          <Global styles={styles} />
          {props.children}
        </ThemeProvider>
      </Layout>
    </>
  )
}

export const wrapPageElement = ({ element, props }) =>
  <Root {...props}>
    {element}
  </Root>

export * from './components'
