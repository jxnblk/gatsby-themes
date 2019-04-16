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
  NavLink,
} from 'gatsby-theme-system'

export default props =>
  <Layout>
    <Header>
      <NavLink as={Link} to='/'>
        Gatsby Theme System
      </NavLink>
      <Box mx='auto' />
      <NavLink as={Link} to='/'>
        Home
      </NavLink>
      <NavLink as={Link} to='/freeform'>Demo</NavLink>
    </Header>
    <Main>
      {props.children}
    </Main>
    <Footer>
      <NavLink href='https://github.com/jxnblk/gatsby-themes'>GitHub</NavLink>
      <NavLink href='https://jxnblk.com'>Made by Jxnblk</NavLink>
      <Box mx='auto' />
      <Box>
        © 2019 Jxnblk
      </Box>
    </Footer>
  </Layout>
