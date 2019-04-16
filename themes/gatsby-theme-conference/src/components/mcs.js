import React from 'react'
import { Styled } from 'theme-ui'
import { Box } from 'theme-ui/layout'

export default ({
  mcs = []
}) =>
  <Box
    id='mcs'
    px={4}
    py={5}>
    <Styled.h2>MCs</Styled.h2>
    <ul>
      {mcs.map(mc => (
        <li key={mc.id}>
          <Styled.img
            src={mc.image}
          />
          <Styled.h3>
            {mc.name}
          </Styled.h3>
          <Styled.p>
            {mc.bio}
          </Styled.p>
        </li>
      ))}
    </ul>
  </Box>
