import React from 'react'
import { Styled } from 'theme-ui'
import { Box, Container } from 'theme-ui/layout'
import SectionHeading from './section-heading'
import FlexList from './flex-list'
import Card from './card'
import BackgroundImage from './background-image'

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
          <Card as='li' key={mc.id}>
            <BackgroundImage
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
    </Container>
  </Box>
