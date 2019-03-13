import React from 'react'
import Layout from '../layout'
import { Flex, Box } from '../components'
import Intro from './intro.mdx'
import Triangle from '../Triangle'
import Pentagon from '../Pentagon'

import Readme from 'gatsby-theme-configured/README.md'

export default props =>
  <>
    <Box px={4}>
      <Flex
        mx={-4}
        py={[ 4, 5, 6 ]}
        bg='cyan'
        flexWrap='wrap'>
        <Flex
          width={[1, 1/2, 2/5]}
          alignItems='center'
          justifyContent='center'
          p={4}>
          <Pentagon
            size={256}
            m='auto'
            color='white'
          />
        </Flex>
        <Box width={[1, 1/2, 3/5]}
          px={4} py={5}>
          <Box as='h1'
            m={0}
            fontSize={[4, 5, 6]}>
            Configured Theme Example
          </Box>
          <Box as='p' fontSize={3}>
            A 100% configuration-driven Gatsby theme
          </Box>
          <Box
            px={4}
            py={3}
            color='white'
            bg='black'
            fontSize={3}
            css={{
              display: 'inline-block',
              fontWeight: 'bold',
              borderRadius: 8,
            }}>
            Beep Boop
          </Box>
        </Box>
      </Flex>
    </Box>
    <Layout>
      <Intro />
      <Readme />
    </Layout>
  </>
