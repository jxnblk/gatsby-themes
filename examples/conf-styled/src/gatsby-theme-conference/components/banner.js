import React from 'react'
import {
  Box,
  Flex,
  Container,
  Styled,
  css,
  Button,
} from 'gatsby-theme-conference'

export default props =>
  <Box
    py={[5, 6]}
    bg='muted'>
    <Container>
      <Flex
        mx={-4}
        alignItems='center'
        flexWrap='wrap'>
        <Box px={4}>
          <Styled.img
            width='128'
            height='128'
            src='https://notebook.jxnblk.com/flower.png'
          />
        </Box>
        <Box px={4}>
          <Styled.h1>
            Purple Conf 2019
          </Styled.h1>
          <Styled.p
            css={css({
              fontSize: 3,
            })}>
            The purplest conference ever.
          </Styled.p>
          <Button href='#purchase'>
            Buy Tickets
          </Button>
        </Box>
      </Flex>
    </Container>
  </Box>
