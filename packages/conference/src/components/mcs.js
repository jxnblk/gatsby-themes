/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import SectionHeading from './section-heading'
import FlexList from './flex-list'
import MCCard from './mc-card'

export default ({
  mcs = []
}) =>
  <div
    id='mcs'
    sx={{ py: 5 }}>
    <Container>
      <SectionHeading>
        MCs
      </SectionHeading>
      <FlexList
        sx={{
          justifyContent: 'center',
        }}>
        {mcs.map(mc => (
          <MCCard
            key={mc.id}
            as='li'
            {...mc}
          />
        ))}
      </FlexList>
    </Container>
  </div>
