/** @jsx jsx */
import { Link } from 'gatsby'
import { Fragment } from 'react'
import {
  jsx,
  Styled,
} from 'theme-ui'
import {
  Button,
  NavLink,
} from 'gatsby-theme-conference'


export default props =>
  <Fragment>
    <NavLink
      as={Link}
      to='/'
      sx={{
        color: 'primary',
        display: 'flex',
        alignItems: 'center',
      }}>
      <Styled.img
        width='32'
        height='32'
        src='https://notebook.jxnblk.com/flower.png'
      />
      <div sx={{ mx: 1 }} />
      Purple Conf
    </NavLink>
    <div sx={{ mx: 'auto' }} />
    <Button href='#'>
      Buy Tickets
    </Button>
  </Fragment>
