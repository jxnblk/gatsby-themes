import React from 'react'
import { Styled, css } from 'theme-ui'
import { Box } from 'theme-ui/layout'
import { Twitter, Instagram } from 'react-feather'
import useSiteMetadata from '../use-site-metadata'
import NavLink from './nav-link'

export default props => {
  const { twitter, instagram } = useSiteMetadata()

  return (
    <>
      <NavLink href='#speakers'>Speakers</NavLink>
      <NavLink href='#schedule'>Schedule</NavLink>
      <NavLink href='#venue'>Venue</NavLink>
      <NavLink href='#sponsors'>Sponsors</NavLink>
      <NavLink href='#purchase'>Buy Tickets</NavLink>
      <NavLink to='/code-of-conduct'>Code of Conduct</NavLink>
      <NavLink to='/scholarship'>Scholarship</NavLink>
      <NavLink to='/privacy-policy'>Privacy Policy</NavLink>
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
          mb: 0
        })}>
        © 2019 Gatsby, Inc.
      </Styled.p>
    </>
  )
}
