import React from 'react'
import { Styled, css } from 'theme-ui'
import { Box, Container } from 'theme-ui/layout'
import useSiteMetadata from '../use-site-metadata'
import Button from './button'

export default props => {
  const {
    title,
    description
  } = useSiteMetadata()

  return (
    <Box
      {...props}
      py={[5, 6, 7]}>
      <Container>
        <Styled.h1
          css={css({
            fontSize: [5, 6, 7],
            m: 0
          })}>
          {title}
        </Styled.h1>
        <Styled.p
          css={css({
            fontSize: 3,
            mb: 5,
          })}>
          {description}
        </Styled.p>
        <div css={{ display: 'flex' }}>
        </div>
        <Button href='#purchase'>
          Buy Tickets
        </Button>
      </Container>
    </Box>
  )
}
