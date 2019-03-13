import React from 'react'
import styled from '@emotion/styled'
import { space, color } from 'styled-system'

const Svg = styled('svg')(space, color)

export default ({
  size = 128,
  color = 'currentcolor',
  ...props
}) =>
  <Svg
    {...props}
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill={color}>
    <path
      d='M12 0 L1 8 L5 22 L19 22 L23 8 z'
    />
  </Svg>
