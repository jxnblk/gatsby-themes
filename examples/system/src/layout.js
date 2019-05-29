import React from 'react'
// import { Link } from 'gatsby'
import {
  // Styled, css,
  Layout,
  Main,
  // Footer,
  // Box,
  // NavLink,
} from 'gatsby-theme-system'

export default props =>
  <Layout>
    <Main>
      {props.children}
    </Main>
    {/*
    <Footer>
      <NavLink href='https://github.com/jxnblk/gatsby-themes'>GitHub</NavLink>
      <NavLink href='https://jxnblk.com'>Made by Jxnblk</NavLink>
      <Box mx='auto' />
      <Box>
        © 2019 Jxnblk
      </Box>
    </Footer>
    */}
  </Layout>
