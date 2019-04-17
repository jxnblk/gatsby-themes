import React from 'react'
import { Styled } from 'theme-ui'
import { Box } from 'theme-ui/layout'
import Button from './button'

export default props =>
  <Box
    id='purchase'
    px={4}
    py={5}>
    <Button href='#!'>
      Buy Tickets
    </Button>
  </Box>
