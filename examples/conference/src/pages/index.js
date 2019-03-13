import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../layout'
import { Flex, Box } from '../components'
import Intro from './intro.mdx'
import Speakers from './speakers.mdx'
import Venue from './venue.mdx'
import Schedule from './schedule.mdx'
import Sponsors from './sponsors.mdx'
import { X, O } from '../shapes'

export default props =>
  <>
    <Helmet>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Poppins|Roboto+Mono'
      />
    </Helmet>
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
          <O color='secondary' />
          <X color='primary' />
          <O color='secondary' />
        </Flex>
        <Box width={[1, 1/2, 3/5]}
          px={4} py={5}>
          <Box as='h1'
            m={0}
            fontSize={[4, 5, 6]}>
            It's a Conference!
          </Box>
          <Box as='p'
            color='primary'
            fontSize={3}>
            New York City 2019
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
              borderRadius: 6,
            })}>
            Register Now
          </Box>
        </Box>
      </Flex>
    </Box>
    <Layout>
      <Intro />
      <div id='speakers'>
        <Speakers />
      </div>
      <div id='venue'>
        <Venue />
      </div>
      <div id='schedule'>
        <Schedule />
      </div>
      <div id='sponsors'>
        <Sponsors />
      </div>
      <div id='register'>
        <h2>Buy Tickets</h2>
      </div>
    </Layout>
  </>
