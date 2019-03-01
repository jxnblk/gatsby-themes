import React from 'react'
import {
  Box,
  Flex,
} from 'rebass'
import Header from './header'
import Footer from './footer'

export default props =>
  <Box
    css={{
      fontFamily: 'system-ui, sans-serif',
    }}>
    <Flex
      as='header'
      px={4}
      py={2}
      color='white'
      bg='black'
      alignItems='center'
      flexWrap='wrap'>
      <Header {...props} />
    </Flex>
    {props.children}
    <Flex
      as='footer'
      px={4}
      py={4}
      flexWrap='wrap'
      alignItems='center'>
      <Footer {...props} />
    </Flex>
  </Box>
