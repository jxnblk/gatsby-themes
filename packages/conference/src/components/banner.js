/** @jsx jsx */
import React from 'react'
import { jsx, Styled, Container } from 'theme-ui'
import useSiteMetadata from '../use-site-metadata'
import Button from './button'

export default props => {
  const {
    title,
    description
  } = useSiteMetadata()

  return (
    <div
      {...props}
      sx={{
        py: [5, 6],
      }}>
      <Container>
        <Styled.h1
          sx={{
            fontSize: [5, 6, 7],
            m: 0
          }}>
          {title}
        </Styled.h1>
        <Styled.p
          sx={{
            fontSize: 3,
            mb: 5,
          }}>
          {description}
        </Styled.p>
        <div sx={{ display: 'flex' }}>
        </div>
        <Button href='#purchase'>
          Buy Tickets
        </Button>
      </Container>
    </div>
  )
}
