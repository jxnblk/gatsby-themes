/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import React from 'react'
import Header from './header.mdx'
import styles from './styles'

const wrapper = props =>
  <ThemeProvider theme={{ styles }}>
    <div
      {...props}
      css={{
        display: 'flex',
        alignItems: 'center',
        mx: -2,
      }}
    />
  </ThemeProvider>

export const wrapPageElement = ({ element, props }, opts) => {
  if (!opts.siteWide) return element
  return (
    <>
      <Header
        components={{ wrapper }}
      />
      {element}
    </>
  )
}
