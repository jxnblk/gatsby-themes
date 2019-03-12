import React from 'react'
import { Link } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'
import {
  Layout,
  Header,
  Main,
  Footer,
  Box,
} from 'gatsby-theme-system'
import poppins from '@styled-system/typography/poppins'

const theme = {
  colors: {
    pre: {
      text: 'white',
      background: 'rebeccapurple',
    },
    code: {
      text: 'rebeccapurple',
      background: 'transparent',
    },
  },
  typography: poppins,
}

export default props => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header>
          <Box as='h1'
            fontSize={2}>
            Gatsby Theme System (Poppins)
          </Box>
        </Header>
        <Main>
          {props.children}
        </Main>
        <Footer
          py={4}
          fontSize={1}>
          <a href='https://github.com/jxnblk/gatsby-themes'>GitHub</a>
          <Box mx={1} />
          <a href='https://jxnblk.com'>Made by Jxnblk</a>
          <Box mx='auto' />
          <Box>
            © 2019 Jxnblk
          </Box>
        </Footer>
      </Layout>
    </ThemeProvider>
  )
}
