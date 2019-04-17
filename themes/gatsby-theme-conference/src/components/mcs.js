import React from 'react'
import { Box, Container } from 'theme-ui/layout'
import SectionHeading from './section-heading'
import FlexList from './flex-list'
import MCCard from './mc-card'

export default ({
  mcs = []
}) =>
  <Box
    id='mcs'
    py={5}>
    <Container>
      <SectionHeading>
        MCs
      </SectionHeading>
      <FlexList
        css={{
          justifyContent: 'center',
        }}>
        {mcs.map(mc => (
          <MCCard
            key={mc.id}
            as='li'
            {...mc}
          />
        ))}
      </FlexList>
    </Container>
  </Box>
