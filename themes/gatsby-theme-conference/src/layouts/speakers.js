import React from 'react'
import { Styled, css } from 'theme-ui'
import { Container } from 'theme-ui/layout'
import Layout from '../components/layout'
import FlexList from '../components/flex-list'
import BackgroundImage from '../components/background-image'
import SpeakerCard from '../components/speaker-card'

export default ({
  data,
}) => {
  const speakers = data.allSpeakersYaml.edges.map(edge => edge.node)

  return (
    <Layout>
      <Container>
        <Styled.h1
          css={css({
            mb: 5,
          })}>
          Speakers
        </Styled.h1>
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
      </Container>
    </Layout>
  )
}
