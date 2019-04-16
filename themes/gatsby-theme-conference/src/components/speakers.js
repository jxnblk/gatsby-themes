import React from 'react'
import { Styled, css } from 'theme-ui'
import { Box } from 'theme-ui/layout'

export default ({
  speakers = []
}) =>
  <Box
    id='speakers'
    px={4}
    py={5}>
    <Styled.h2>
      Speakers
    </Styled.h2>
    <ul>
      {speakers.map(speaker => (
        <li key={speaker.id}>
          <Styled.img
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
    </ul>
  </Box>
