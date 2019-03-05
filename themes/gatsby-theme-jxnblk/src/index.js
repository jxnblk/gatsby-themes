import React from 'react'
import { Global } from '@emotion/core'

const style = (
  <Global
    styles={{
      '*': { boxSizing: 'border-box' },
      body: {
        margin: 0,
        fontFamily: 'system-ui, sans-serif',
        lineHeight: 1.5,
      }
    }}
  />
)

const Root = props =>
  <>
    {style}
    {props.children}
  </>

export const wrapPageElement = ({ element, props }) =>
  <Root {...props} children={element} />
