import React from 'react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import { Global } from '@emotion/core'
import { withTheme } from 'emotion-theming'
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
import get from 'lodash.get'

export const Box = styled('div')(
  space,
  color,
  fontSize,
  width
)

const styles = theme => (reset, {
  '*': { boxSizing: 'border-box' },
  body: {
    margin: 0,
    // color: get(theme, 'colors.text', '#000'),
    // backgroundColor: get(theme, 'colors.background', '#fff'),
    // ...(theme.typography.body || {})
  },
  // a: { color: get(theme, 'colors.link'), }
})
/*
<Global styles={styles} />
*/

export const Typography = () =>
  <>
    <Global styles={styles} />
    <Global styles={props => {
      console.log(typography(props))
      return typography(props)
    }} />
  </>

export const GoogleFonts = withTheme(props => {
  const { googleFonts } = props.theme.typography || {}
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

