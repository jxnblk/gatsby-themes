/** @jsx jsx */
import { jsx, Styled, Container } from 'theme-ui'
import SectionHeading from './section-heading'
import FlexList from './flex-list'
import Card from './card'

export default ({
  sponsors = []
}) =>
  <div
    id='sponsors'
    sx={{ py: 5 }}>
    <Container>
      <SectionHeading>
        Sponsors
      </SectionHeading>
      <FlexList
        sx={{
          justifyContent: 'center',
        }}>
        {sponsors.map(sponsor => (
          <Card as='li' key={sponsor.id}>
            <Styled.a
              title={sponsor.name}
              href={sponsor.url}>
              <Styled.img
                src={sponsor.logo}
              />
            </Styled.a>
          </Card>
        ))}
      </FlexList>
    </Container>
  </div>
