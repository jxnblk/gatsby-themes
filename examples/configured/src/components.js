import styled from '@emotion/styled'
import {
  space,
  color,
  width,
  fontSize,
  flexDirection,
  alignItems,
  justifyContent,
  flexWrap,
} from 'styled-system'

export const Box = styled('div')(
  space,
  color,
  width,
  fontSize
)

export const Flex = styled(Box)(
  { display: 'flex' },
  flexDirection,
  alignItems,
  justifyContent,
  flexWrap,
)
