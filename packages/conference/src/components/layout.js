/** @jsx jsx */
import React from 'react'
import { Global } from '@emotion/core'
import * as UI from 'theme-ui'
import { jsx } from 'theme-ui'
import Header from './header'
import Footer from './footer'

export default props =>
  <UI.Layout
    {...props}
    sx={{
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      color: 'text',
      bg: 'background',
    }}>
    <Global
      styles={{
        '*': { boxSizing: 'border-box' },
        body: { margin: 0 }
      }}
    />
    <UI.Header
      sx={{
        alignItems: 'center',
        px: 3,
        py: 2,
        overflowX: 'auto',
      }}>
      <Header />
    </UI.Header>
    <UI.Main>
      {props.children}
    </UI.Main>
    <UI.Footer
      sx={{
        py: 3,
      }}>
      <Footer />
    </UI.Footer>
  </UI.Layout>
