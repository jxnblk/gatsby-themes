import React from 'react'
import { Link } from 'gatsby'
import { Styled } from 'theme-ui'
import { Box, Container } from 'theme-ui/layout'
import SectionHeading from './section-heading'
import FlexList from './flex-list'
import SpeakerCard from './speaker-card'

export default ({
  speakers = []
}) =>
  <Box
    id='speakers'
    py={5}>
    <Container>
      <SectionHeading>
        Speakers
      </SectionHeading>
      <FlexList
        css={{
          justifyContent: 'center',
        }}>
        {speakers.map(speaker => (
          <SpeakerCard
            key={speaker.id}
            as='li'
            {...speaker}
          />
        ))}
      </FlexList>
      <Box
        css={{
          textAlign: 'center'
        }}>
        <Styled.a
          as={Link}
          to='/speakers'>
          View all speakers
        </Styled.a>
      </Box>
    </Container>
  </Box>
