import React from 'react'
import { ThemeProvider, withTheme } from 'emotion-theming'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import { Helmet } from 'react-helmet'
import {
  space,
  color,
  width,
  fontSize,
} from 'styled-system'
import {
  typography,
  reset,
} from '@styled-system/typography'
import merge from 'lodash.merge'
import get from 'lodash.get'
import theme from './theme'

const mergeTheme = outer => merge({}, theme, outer)

export const wrapRootElement = ({ element, props }) =>
  <ThemeProvider theme={mergeTheme}>
    {element}
  </ThemeProvider>

export const Box = styled('div')(
  space,
  color,
  fontSize,
  width
)

const StyledTypography = styled.div(
  props => {
    const theme = merge({}, get(props, 'theme'), {
      typography: {
        scoped: true
      }
    })
    return typography({ theme })
  }
)

export const Typography = ({
  scoped = false,
  ...props
}) => scoped ? (
  <StyledTypography {...props} />
) : (
  <Global styles={typography} />
)

export const GoogleFonts = withTheme(props => {
  const { googleFonts } = props.theme.typography || {}
  console.log('GoogleFonts', props.theme, googleFonts)
  if (!googleFonts) return false
  return (
    <Helmet>
      <link
        rel='stylesheet'
        href={googleFonts}
      />
    </Helmet>
  )
})

const globalStyles = theme => (reset, {
  '*': { boxSizing: 'border-box' },
  body: { margin: 0 },
})

export const LayoutRoot = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
})

export const Layout = props =>
  <>
    <Global styles={globalStyles} />
    <GoogleFonts />
    <LayoutRoot {...props} />
  </>

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

export const Content = styled(Box)({
  maxWidth: 1024,
})
Content.defaultProps = {
  mx: 'auto',
  p: 4,
}

export const getColor = (theme, value, fallback) =>
  get(theme.colors, value, get(theme.colors, fallback, fallback))

export const ColorScheme = () =>
  <Global
    styles={theme => ({
      body: {
        color: getColor(theme, 'text', 'black'),
        backgroundColor: getColor(theme, 'background', 'white'),
      },
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
    })}
  />

