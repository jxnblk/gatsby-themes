import React from 'react'
import { Box, Text } from 'rebass'

export default props =>
  <>
    <Box
      px={4}
      py={[ 4, 5, 6, 7 ]}
      color='blue'
      bg='black'
      css={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: 'url(https://images.unsplash.com/photo-1548166979-335923cdd636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80)',
      }}>
      <Text as='h1'>
        Gatsby Theme Rebass example
      </Text>
    </Box>
  </>
