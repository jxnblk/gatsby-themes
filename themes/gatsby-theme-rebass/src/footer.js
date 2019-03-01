import React from 'react'
import { Text, Box } from 'rebass'
import Link from './link'

export default () =>
  <>
    <Text>
      Gatsby Theme Rebass
    </Text>
    <Box mx={2} />
    <Link as='a' href='https://rebassjs.org'>
      Rebass
    </Link>
    <Box mx='auto' />
    <Link as='a' href='https://jxnblk.com'>
      Made by Jxnblk
    </Link>
  </>
