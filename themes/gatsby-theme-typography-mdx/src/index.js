import React, { useMemo } from 'react'
import { MDXProvider } from '@mdx-js/tag'
import typographyMDX from 'typography-mdx'
import theme from './typography'

const Root = props => {
  const components = useMemo(() => {
    return typographyMDX(props.theme)
  }, [ props.theme ])
  return (
    <MDXProvider components={components}>
      {props.children}
    </MDXProvider>
  )
}

export const wrapPageElement = ({ element, props }) =>
  <Root>
    {element}
  </Root>
