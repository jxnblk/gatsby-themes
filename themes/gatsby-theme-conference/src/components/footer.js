import React from 'react'
import { Link } from 'gatsby'
import { Styled, css } from 'theme-ui'
import { Box } from 'theme-ui/layout'
import { Twitter, Instagram } from 'react-feather'
import useSiteMetadata from '../use-site-metadata'
import NavLink from './nav-link'

export default props => {
  const { twitter, instagram } = useSiteMetadata()

  return (
    <>
      <NavLink as={Link} to='/speakers'>Speakers</NavLink>
      <NavLink as={Link} to='/schedule'>Schedule</NavLink>
      <NavLink href='#venue'>Venue</NavLink>
      <NavLink href='#sponsors'>Sponsors</NavLink>
      <NavLink href='#purchase'>Buy Tickets</NavLink>
      <NavLink as={Link} to='/code-of-conduct'>Code of Conduct</NavLink>
      <NavLink as={Link} to='/scholarship'>Scholarship</NavLink>
      <NavLink as={Link} to='/privacy-policy'>Privacy Policy</NavLink>
      <Box mx='auto' />
      {twitter && (
        <Styled.a
          title='Follow us on Twitter'
          href={twitter}
          css={css({
            display: 'inline-block',
            color: 'inherit',
            textDecoration: 'none',
          })}>
          <Twitter
            css={{
              display: 'inline-block',
              verticalAlign: 'middle',
            }}
          />
        </Styled.a>
      )}
      {instagram && (
        <Styled.a
          title='Follow us on Instagram'
          href={instagram}
          css={css({
            display: 'inline-block',
            p: 3,
            color: 'inherit',
            textDecoration: 'none',
          })}>
          <Instagram
            css={{
              display: 'inline-block',
              verticalAlign: 'middle',
            }}
          />
        </Styled.a>
      )}
      <Styled.p
        css={css({
          mb: 0,
          px: 3,
        })}>
        © 2019 Gatsby, Inc.
      </Styled.p>
    </>
  )
}
