/** @jsx jsx */
import { Styled, jsx, Container } from 'theme-ui'
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
          sx={{
            mb: 5,
          }}>
          Speakers
        </Styled.h1>
        <FlexList
          sx={{
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
