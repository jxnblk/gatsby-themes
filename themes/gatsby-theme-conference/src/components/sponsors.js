import React from 'react'
import { Styled } from 'theme-ui'
import { Box } from 'theme-ui/layout'
import SectionHeading from './section-heading'
import FlexList from './flex-list'
import Card from './card'

export default ({
  sponsors = []
}) =>
  <Box
    id='sponsors'
    px={4}
    py={5}>
    <SectionHeading>
      Sponsors
    </SectionHeading>
    <FlexList>
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
  </Box>
