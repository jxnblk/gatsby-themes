/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'
import useSiteMetadata from '../use-site-metadata'
import NavLink from './nav-link'
import Button from './button'
import DesktopOnly from './desktop-only'

export default props => {
  const { title } = useSiteMetadata()

  return (
    <>
      <NavLink as={Link} to='/'>{title}</NavLink>
      <div sx={{ mx: 'auto' }} />
      <DesktopOnly>
        <NavLink as={Link} to='/#speakers'>Speakers</NavLink>
        <NavLink as={Link} to='/#schedule'>Schedule</NavLink>
        <NavLink as={Link} to='/#venue'>Venue</NavLink>
        <NavLink as={Link} to='/#sponsors'>Sponsors</NavLink>
      </DesktopOnly>
      <Button as={Link} to='/#purchase'>Buy Tickets</Button>
    </>
  )
}
