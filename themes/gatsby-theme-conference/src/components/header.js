import React from 'react'
import { Link } from 'gatsby'
import { Box } from 'theme-ui/layout'
import useSiteMetadata from '../use-site-metadata'
import NavLink from './nav-link'
import Button from './button'

export default props => {
  const { title } = useSiteMetadata()

  return (
    <>
      <NavLink as={Link} to='/'>{title}</NavLink>
      <Box mx='auto' />
      <NavLink href='#speakers'>Speakers</NavLink>
      <NavLink href='#schedule'>Schedule</NavLink>
      <NavLink href='#venue'>Venue</NavLink>
      <NavLink href='#sponsors'>Sponsors</NavLink>
      <Button href='#purchase'>Buy Tickets</Button>
    </>
  )
}
