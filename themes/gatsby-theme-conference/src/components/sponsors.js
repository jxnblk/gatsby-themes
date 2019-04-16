import React from 'react'
import { Styled } from 'theme-ui'
import { Box } from 'theme-ui/layout'

export default ({
  sponsors = []
}) =>
  <Box
    id='sponsors'
    px={4}
    py={5}>
    <Styled.h2>
      Sponsors
    </Styled.h2>
    <ul>
      {sponsors.map(sponsor => (
        <li key={sponsor.id}>
          <Styled.a href={sponsor.url}>
            {sponsor.name}
          </Styled.a>
        </li>
      ))}
    </ul>
  </Box>
