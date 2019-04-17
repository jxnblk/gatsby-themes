import React from 'react'
import { Styled } from 'theme-ui'
import { Box, Container } from 'theme-ui/layout'
import SectionHeading from './section-heading'

export default ({
  title,
  description,
  address
}) =>
  <Box
    id='venue'
    py={5}>
    <Container>
      <SectionHeading>
        Venue
      </SectionHeading>
      <Styled.h3>{title}</Styled.h3>
      <Styled.p>{address}</Styled.p>
      <Styled.p>{description}</Styled.p>
    </Container>
  </Box>
