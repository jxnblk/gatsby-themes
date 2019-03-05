import React from 'react'
import { Global } from '@emotion/core'
import styletype from './typography/typo'

const type = styletype()

const Root = props =>
  <>
    <Global styles={type.styles} />
    {props.children}
    <pre
      children={JSON.stringify(type, null, 2)}
    />
  </>

export const wrapPageElement = ({ element, props }) =>
  <Root {...props} children={element} />
