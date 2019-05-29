/** @jsx jsx */
import {
  jsx,
  Layout,
  Main
} from 'theme-ui'
import React from 'react'
import { Global } from '@emotion/core'
import { Header } from 'gatsby-theme-header'
import { Footer } from 'gatsby-theme-footer'

export const GlobalStyles = props =>
  <Global
    styles={{
      '*': { boxSizing: 'border-box' },
      body: { margin: 0 }
    }}
  />

export default props =>
  <>
    <GlobalStyles />
    <Layout
      css={{
        fontFamily: 'body',
        lineHeight: 'body',
      }}>
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </Layout>
  </>
