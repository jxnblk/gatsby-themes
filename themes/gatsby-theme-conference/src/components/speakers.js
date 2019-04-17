import React from 'react'
import { Styled, css } from 'theme-ui'
import { Box } from 'theme-ui/layout'
import SectionHeading from './section-heading'
import FlexList from './flex-list'
import BackgroundImage from './background-image'
import Card from './card'

export default ({
  speakers = []
}) =>
  <Box
    id='speakers'
    px={4}
    py={5}>
    <SectionHeading>
      Speakers
    </SectionHeading>
    <FlexList
      css={{
        justifyContent: 'center',
      }}>
      {speakers.map(speaker => (
        <Card
          as='li'
          key={speaker.id}>
          <BackgroundImage
            src={speaker.image}
          />
          <Styled.h3>
            {speaker.name}
            {' '}
            <span
              css={css({
                fontSize: 2,
                fontWeight: 'normal',
              })}>
              {speaker.company}
            </span>
          </Styled.h3>
          <Styled.p>
            {speaker.bio}
          </Styled.p>
        </Card>
      ))}
    </FlexList>
  </Box>
