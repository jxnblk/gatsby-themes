import React from 'react'
import { Global } from '@emotion/core'
import {
  ThemeProvider,
  Root,
  Header,
  Footer,
  Main,
  // Box,
  // Container,
} from 'theme-ui'
import theme from './theme'

// import merge from 'lodash.merge'
// import get from 'lodash.get'

export {
  ThemeProvider,
  Box,
  Root,
  Header,
  Footer,
  Main,
  Container,
} from 'theme-ui'

const styles = (
  <Global
    styles={{
      '*': { boxSizing: 'border-box' },
      body: { margin: 0 },
    }}
  />
)

export const wrapRootElement = ({ element, props }) =>
  <ThemeProvider >
    {styles}
    {element}
  </ThemeProvider>


export const Layout = props =>
  <Root>
    <Header>
      Howdy
    </Header>
    <Main>
      {props.children}
    </Main>
    <Footer>
      Beep boop
    </Footer>
  </Root>

