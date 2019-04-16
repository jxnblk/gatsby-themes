import React from 'react'
import { Link } from 'gatsby'
import { Styled } from 'theme-ui'
import { Box } from 'theme-ui/layout'
import useSiteMetadata from '../use-site-metadata'

export default props => {
  const {
    title,
    description
  } = useSiteMetadata()

  return (
    <>
      <Link to='/'>{title}</Link>
      <Box mx='auto' />
      <Styled.a href='#speakers'>Speakers</Styled.a>
      <Styled.a href='#schedule'>Schedule</Styled.a>
      <Styled.a href='#venue'>Venue</Styled.a>
      <Styled.a href='#sponsors'>Sponsors</Styled.a>
      <Styled.a href='#purchase'>Buy Tickets</Styled.a>
    </>
  )
}
