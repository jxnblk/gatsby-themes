/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, Styled, Container } from 'theme-ui'
import SectionHeading from './section-heading'
import FlexList from './flex-list'
import SpeakerCard from './speaker-card'

export default ({
  speakers = []
}) =>
  <div
    id='speakers'
    sx={{
      py: 5,
    }}>
    <Container>
      <SectionHeading>
        Speakers
      </SectionHeading>
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
      <div
        sx={{
          textAlign: 'center'
        }}>
        <Styled.a
          as={Link}
          to='/speakers'>
          View all speakers
        </Styled.a>
      </div>
    </Container>
  </div>
