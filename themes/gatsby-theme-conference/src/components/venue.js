import React from 'react'
import { Styled } from 'theme-ui'
import { Box } from 'theme-ui/layout'
import SectionHeading from './section-heading'

export default ({
  title,
  description,
  address
}) =>
  <Box
    id='venue'
    px={4}
    py={5}>
    <SectionHeading>
      Venue
    </SectionHeading>
    <Styled.h3>{title}</Styled.h3>
    <Styled.p>{address}</Styled.p>
    <Styled.p>{description}</Styled.p>
  </Box>
