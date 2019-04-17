import React from 'react'
import { Styled, css } from 'theme-ui'
import { Flex, Box } from 'theme-ui/layout'

export default ({
  date,
  time,
  speaker,
  title,
  description,
}) =>
  <Flex
    flexWrap={['wrap', 'nowrap']}
    alignItems='baseline'>
    <Box
      flex='none'
      width={[1/2, 128]}>
      <Styled.h3
        css={css({
          fontSize: 3,
        })}>
        {time}
      </Styled.h3>
    </Box>
    <Box
      flex='none'
      width={[1/2, 192]}>
      <Styled.h4
        css={css({
          fontSize: 3,
        })}>
        {title}
      </Styled.h4>
        {speaker && speaker.name}
    </Box>
    <Box width={1}>
      <Styled.p>
      </Styled.p>
      <Styled.p>
        {description}
      </Styled.p>
    </Box>
  </Flex>
