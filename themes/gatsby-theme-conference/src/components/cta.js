import React from 'react'
import { Styled } from 'theme-ui'
import { Box, Container } from 'theme-ui/layout'
import Button from './button'

export default props =>
  <Box
    id='purchase'
    py={[5, 6]}>
    <Container>
      <Button href='#!'>
        Buy Tickets
      </Button>
    </Container>
  </Box>
