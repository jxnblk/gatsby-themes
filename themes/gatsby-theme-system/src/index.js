import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import Layout from './layout'
import theme from './theme'

const Root = props => {
  return (
    <ThemeProvider theme={theme}>
      <Layout {...props}>
        {props.children}
      </Layout>
    </ThemeProvider>
  )
}

export const wrapPageElement = ({ element, props }) =>
  <Root {...props}>
    {element}
  </Root>

