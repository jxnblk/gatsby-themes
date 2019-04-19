import React from 'react'
import { Global } from '@emotion/core'
import {
  BlocksProvider,
} from 'mdx-blocks'
import theme from './theme'
import components from './components'

const styles = {
  '*': { boxSizing: 'border-box' },
  body: { margin: 0 },
}

export const wrapPageElement = ({ element, props }) =>
  <BlocksProvider
    components={components}
    theme={theme}>
    <Global styles={styles} />
    {element}
  </BlocksProvider>
