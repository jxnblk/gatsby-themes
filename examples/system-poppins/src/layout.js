import React from 'react'
import { Link } from 'gatsby'
import {
  css,
  Layout,
  Header,
  Main,
  Container,
  Footer,
  Box,
  NavLink,
} from 'gatsby-theme-system'

export default props =>
  <Layout
    css={css({
      fontFamily: 'Poppins, sans-serif',
    })}>
    <Header>
      <NavLink as={Link} to='/'>
        Gatsby Theme System (Poppins)
      </NavLink>
    </Header>
    <Main>
      <Container>
        {props.children}
      </Container>
    </Main>
    <Footer>
      <NavLink href='https://github.com/jxnblk/gatsby-themes'>GitHub</NavLink>
      <Box mx={1} />
      <NavLink href='https://jxnblk.com'>Made by Jxnblk</NavLink>
      <Box mx='auto' />
      <Box>
        © 2019 Jxnblk
      </Box>
    </Footer>
  </Layout>
