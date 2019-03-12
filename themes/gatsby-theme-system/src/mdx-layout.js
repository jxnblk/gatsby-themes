import React from 'react'
import styled from '@emotion/styled'
import { space, maxWidth } from 'styled-system'
import { typography, reset } from '@styled-system/typography'

const Root = styled('div')(
  space,
  maxWidth,
  typography,
  reset
)

export default props =>
  <Root
    px={3}
    py={3}
    mx='auto'
    maxWidth={1024}
    {...props}
  />
