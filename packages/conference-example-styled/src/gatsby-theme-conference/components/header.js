import React from 'react'
import { Link } from 'gatsby'
import {
  Box,
  Button,
  NavLink,
  Styled,
  css,
} from 'gatsby-theme-conference'

export default props =>
  <>
    <NavLink
      as={Link}
      to='/'
      css={css({
        color: 'primary',
        display: 'flex',
        alignItems: 'center',
      })}>
      <Styled.img
        width='32'
        height='32'
        src='https://notebook.jxnblk.com/flower.png'
      />
      <Box mx={1} />
      Purple Conf
    </NavLink>
    <Box mx='auto' />
    <Button href='#'>
      Buy Tickets
    </Button>
  </>
