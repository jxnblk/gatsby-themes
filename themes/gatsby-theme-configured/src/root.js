import React, { useState } from 'react'
import { ThemeProvider } from 'emotion-theming'
import get from 'lodash.get'
import { useThemeConfig } from './hooks'
import Styles from './styles'
import Layout from './layout'
import Header from './header'
import Main from './main'
import Footer from './footer'
import { Context } from './context'

// colors: pre, code, heading, borders,
// type: headings, pre, code,
const rootCSS = theme => ({
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: get(theme, 'fonts.heading'),
    color: get(theme, 'colors.heading'),
  },
  'pre, code': {
    fontFamily: get(theme, 'fonts.monospace'),
  },
  pre: {
    color: get(theme, 'colors.pre.text'),
    backgroundColor: get(theme, 'colors.pre.background'),
  },
  code: {
    color: get(theme, 'colors.code.text'),
    backgroundColor: get(theme, 'colors.code.background'),
  },
})

export default props => {
  const [ menuOpen, setMenuOpen ] = useState(false)
  const config = useThemeConfig()
  const {
    header,
    navigation,
    footer,
  } = config
  const context = {
    menuOpen,
    setMenuOpen,
  }

  return (
    <Context.Provider value={context}>
      <ThemeProvider theme={config}>
        <Styles />
        <Layout css={rootCSS}>
          <Header
            {...header}
            navigation={navigation}
          />
          <Main>
            {props.children}
          </Main>
          <Footer {...footer} />
        </Layout>
      </ThemeProvider>
    </Context.Provider>
  )
}
