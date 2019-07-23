/** @jsx jsx */
import React from 'react'
import { jsx, Container } from 'theme-ui'
import Button from './button'

export default props =>
  <div
    id='purchase'
    sx={{
      py: [ 5, 6],
    }}>
    <Container>
      <Button href='#!'>
        Buy Tickets
      </Button>
    </Container>
  </div>
