import React from 'react'
import THeader from 'gatsby-theme-header/src/header'
import { Link } from 'gatsby'
import { Header, NavLink, Box } from 'gatsby-theme-system'

export default props =>
  <Header>
    <NavLink as={Link} to='/'>
      Gatsby Theme System
    </NavLink>
    <Box mx='auto' />
    <NavLink href='https://github.com/jxnblk/gatsby-themes'>
      GitHub
    </NavLink>
  </Header>
