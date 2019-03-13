import React, { useState } from 'react'
import { ThemeProvider } from 'emotion-theming'
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
        <Layout>
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
