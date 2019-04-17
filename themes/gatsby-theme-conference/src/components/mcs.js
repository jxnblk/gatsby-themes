import React from 'react'
import { Styled } from 'theme-ui'
import { Box } from 'theme-ui/layout'
import SectionHeading from './section-heading'
import FlexList from './flex-list'
import Card from './card'

export default ({
  mcs = []
}) =>
  <Box
    id='mcs'
    px={4}
    py={5}>
    <SectionHeading>
      MCs
    </SectionHeading>
    <FlexList>
      {mcs.map(mc => (
        <Card as='li' key={mc.id}>
          <Styled.img
            src={mc.image}
          />
          <Styled.h3>
            {mc.name}
          </Styled.h3>
          <Styled.p>
            {mc.bio}
          </Styled.p>
        </Card>
      ))}
    </FlexList>
  </Box>
