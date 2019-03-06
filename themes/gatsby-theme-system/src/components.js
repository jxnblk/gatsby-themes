import styled from '@emotion/styled'
import {
  space,
  color,
  width,
  fontSize,
} from 'styled-system'

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

