import React from 'react'
import Layout from '../layout'
import { Flex, Box } from '../components'
import Intro from './intro.mdx'

export default props =>
  <>
    <Box px={4}>
      <Flex
        mx={-4}
        py={[ 4, 5, 6 ]}
        flexWrap='wrap'>
        <Flex
          width={[1, 1/2, 2/5]}
          alignItems='center'
          justifyContent='center'
          p={4}>
          Bloop
        </Flex>
        <Box width={[1, 1/2, 3/5]}
          px={4} py={5}>
          <Box as='h1'
            m={0}
            fontSize={[4, 5, 6]}>
            It's a Conference!
          </Box>
          <Box as='p' fontSize={3}>
            Just a pretend conference so please don't try to actually register
          </Box>
          <Box
            px={4}
            py={3}
            color='white'
            bg='link'
            fontSize={3}
            css={theme => console.log(theme) || ({
              display: 'inline-block',
              fontWeight: 'bold',
              borderRadius: 8,
            })}>
            Register Now
          </Box>
        </Box>
      </Flex>
    </Box>
    <Layout>
      <Intro />
    </Layout>
  </>
