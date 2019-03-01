import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Layout from './layout'
import theme from './_theme'

const Global = createGlobalStyle({
  '*': { boxSizing: 'border-box' },
  body: { margin: 0 }
})

export const wrapPageElement = ({ element, props }) =>
  <ThemeProvider theme={theme}>
    <>
      <Global />
      <Layout {...props}>
        {element}
      </Layout>
    </>
  </ThemeProvider>


