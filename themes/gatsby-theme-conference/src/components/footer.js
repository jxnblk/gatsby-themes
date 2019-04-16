import React from 'react'
import { Styled } from 'theme-ui'
import useSiteMetadata from '../use-site-metadata'

export default props => {
  const { twitter, instagram } = useSiteMetadata()

  return (
    <>
      <Styled.a href='#speakers'>Speakers</Styled.a>
      <Styled.a href='#schedule'>Schedule</Styled.a>
      <Styled.a href='#venue'>Venue</Styled.a>
      <Styled.a href='#sponsors'>Sponsors</Styled.a>
      <Styled.a href='#purchase'>Buy Tickets</Styled.a>
      <Styled.a to='/code-of-conduct'>Code of Conduct</Styled.a>
      <Styled.a to='/scholarship'>Scholarship</Styled.a>
      <Styled.a to='/privacy-policy'>Privacy Policy</Styled.a>

      {twitter && (
        <Styled.a href={twitter}>Twitter</Styled.a>
      )}
      {instagram && (
        <Styled.a href={instagram}>Instagram</Styled.a>
      )}
      <Styled.p>
        © 2019 Gatsby, Inc.
      </Styled.p>
    </>
  )
}
