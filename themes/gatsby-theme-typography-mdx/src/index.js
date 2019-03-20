import React, { useMemo } from 'react'
import { MDXProvider } from '@mdx-js/tag'
import typographyMDX from 'typography-mdx'
import theme from './typography'

const mergeComponents = inner => outer => {
  const components = { ...inner }
  for (const key in outer) {
    if (!components[key].withComponent) {
      components[key] = outer[key]
      continue
    }
    components[key] = components[key].withComponent(outer[key])
  }
  return components
}

const Root = props => {
  const components = useMemo(() => {
    return typographyMDX(props.theme)
  }, [ props.theme ])

  return (
    <MDXProvider components={mergeComponents(components)}>
      {props.children}
    </MDXProvider>
  )
}

export const wrapRootElement = ({ element, props }) =>
  <Root theme={theme}>
    {element}
  </Root>
