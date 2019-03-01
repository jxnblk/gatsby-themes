import React from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import {
  space,
  color,
  fontSize,
  width,
} from 'styled-system'

import vr from 'compass-vertical-rhythm'

export const Box = styled.div(
  space,
  width,
  fontSize,
  color
)

export const DebugSpace = withTheme(({ theme }) => (
  <pre>
    {theme.space}
  </pre>
))

// testing

const { rhythm: r } = vr({
  baseFontSize: '16px',
  baseLineHeight: 1,
  rhythmUnit: 'px',
})
console.log(
  // built into typography-system
  r(1/4),
  r(1/2),
  r(1),
  r(2),
  '---',

  // line height 1.5
  r(1/3),
  r(2/3),
  r(4/3),
  r(8/3),
  r(16/3),
)
