import React from 'react'
import { Styled, css } from 'theme-ui'
import { Container } from 'theme-ui/layout'
import Layout from '../components/layout'
import List from '../components/list'
import BackgroundImage from '../components/background-image'

export default ({
  data,
}) => {
  const speakers = data.allSpeakersYaml.edges.map(edge => edge.node)

  return (
    <Layout>
      <Container>
        <Styled.h1>
          Speakers
        </Styled.h1>
        <List>
          {speakers.map(speaker => (
            <li key={speaker.id}>
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
            </li>
          ))}
        </List>
      </Container>
    </Layout>
  )
}
