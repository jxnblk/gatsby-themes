import React from 'react'
import styled from '@emotion/styled'
import { space, color } from 'styled-system'

export const Svg = styled('svg')(
  space,
  color
)
Svg.defaultProps = {
  viewBox: '0 0 32 32',
  width: 32,
  height: 32,
  fill: 'none',
  stroke: 'currentcolor',
  strokeWidth: 4,
}

export const X = props =>
  <Svg {...props}>
    <path
      d={`
        M2 2 L30 30
        M2 30 L30 2
      `}
    />
  </Svg>

export const O = props =>
  <Svg {...props}>
    <path
      d={`
        M2 16
        A14 14 0 0 1 30 16
        A14 14 0 0 1 2 16
      `}
    />
  </Svg>
