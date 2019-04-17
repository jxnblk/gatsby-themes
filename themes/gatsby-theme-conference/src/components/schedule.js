import React from 'react'
import { Styled } from 'theme-ui'
import { Box } from 'theme-ui/layout'

export default ({
  schedule = []
}) =>
  <Box
    id='schedule'
    px={4}
    py={5}>
    <Styled.h2>
      Schedule
    </Styled.h2>
    <ul>
      {schedule.map(item => (
        <li key={item.date}>
          <Styled.h3>
            {item.date}
          </Styled.h3>
          <Styled.p>
            {item.title}
          </Styled.p>
          <Styled.p>
            {item.description}
          </Styled.p>
          <pre>{item.speaker}</pre>
        </li>
      ))}
    </ul>
  </Box>
