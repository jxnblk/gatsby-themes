import styled from '@emotion/styled'
import {
  space,
  color,
  width,
  fontSize,
} from 'styled-system'
import get from 'lodash.get'

export const Box = styled('div')(
  space,
  color,
  fontSize,
  width
)

export const Layout = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
})

export const Header = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})

Header.defaultProps = {
  as: 'header',
  px: 4,
  py: 3,
  color: 'white',
  bg: 'black',
}

export const Footer = styled(Header)({})

Footer.defaultProps = {
  as: 'footer',
  px: 4,
  py: 3,
  color: 'white',
  bg: 'black',
}

export const Main = styled(Box)({
  flex: '1 1 auto',
})

// color abstraction
//  high-level:
//    - text
//    - background
//    - primary
//    - secondary
//    - highlight
//  mid-level:
//    - link
//    - hover
//    - button
//      - text
//      - background
//      - hover
//        - text
//        - background
//    - pre
//      - text
//      - background
//    - code
//      - text
//      - background
//    - border
export const getColor = (theme, value, fallback) =>
  get(theme.colors, value, get(theme.colors, fallback, fallback))

export const ColorScheme = styled('div')(({ theme }) => ({
  color: getColor(theme, 'text', 'black'),
  backgroundColor: getColor(theme, 'background', 'white'),
  a: {
    color: getColor(theme, 'link', 'primary'),
    '&:hover': {
      color: getColor(theme, 'hover', 'secondary'),
    }
  },
  code: {
    color: getColor(theme, 'code.text', 'secondary'),
    backgroundColor: getColor(theme, 'code.background', 'muted'),
  },
  pre: {
    color: getColor(theme, 'pre.text', 'secondary'),
    backgroundColor: getColor(theme, 'pre.background', 'muted'),
  },
  hr: {
    borderColor: getColor(theme, 'border', 'muted'),
  },
  // blockquote
  // heading
}))
