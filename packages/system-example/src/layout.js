import React from 'react'
import { Link } from 'gatsby'
import {
  Styled,
  css,
  Layout,
  Header,
  Main,
  Footer,
  Box,
} from 'theme-ui'

export default props =>
  <Layout>
    <Header>
      <Link to='/'>
        Gatsby Theme System
      </Link>
      <Box mx='auto' />
      <Link to='/'>
        Home
      </Link>
      <Link to='/freeform'>Demo</Link>
    </Header>
    <Main>
      {props.children}
    </Main>
    <Footer>
      <a href='https://github.com/jxnblk/gatsby-themes'>GitHub</a>
      <a href='https://jxnblk.com'>Made by Jxnblk</a>
      <Box mx='auto' />
      <Box>
        © 2019 Jxnblk
      </Box>
    </Footer>
  </Layout>
