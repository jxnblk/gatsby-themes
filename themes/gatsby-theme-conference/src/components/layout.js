import React from 'react'
import { Global } from '@emotion/core'
import * as UI from 'theme-ui/layout'
import { css } from 'theme-ui'
import Header from './header'
import Footer from './footer'

export default props =>
  <UI.Layout
    {...props}
    css={css({
      fontFamily: 'body',
      lineHeight: 'body',
      color: 'text',
      bg: 'background',
    })}>
    <Global
      styles={{
        '*': { boxSizing: 'border-box' },
        body: { margin: 0 }
      }}
    />
    <UI.Header
      css={css({
        alignItems: 'center',
        px: 3,
        py: 2,
      })}>
      <Header />
    </UI.Header>
    <UI.Main>
      {props.children}
    </UI.Main>
    <UI.Footer
      css={css({
        py: 3,
      })}>
      <Footer />
    </UI.Footer>
  </UI.Layout>
