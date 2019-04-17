import React from 'react'
import { Styled } from 'theme-ui'
import { Box, Container } from 'theme-ui/layout'
import SectionHeading from './section-heading'
import FlexList from './flex-list'
import Card from './card'

export default ({
  sponsors = []
}) =>
  <Box
    id='sponsors'
    py={5}>
    <Container>
      <SectionHeading>
        Sponsors
      </SectionHeading>
      <FlexList
        css={{
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
  </Box>
