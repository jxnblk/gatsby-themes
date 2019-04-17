import React from 'react'
import { Link } from 'gatsby'
import { Styled, css } from 'theme-ui'
import { Box, Container } from 'theme-ui/layout'
import SectionHeading from './section-heading'
import FlexList from './flex-list'
import BackgroundImage from './background-image'
import Card from './card'

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
      <Styled.a
        as={Link}
        to='/speakers'>
        View all speakers
      </Styled.a>
    </Container>
  </Box>
