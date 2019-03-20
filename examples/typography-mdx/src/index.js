import React from 'react'
import { useMDXComponents } from '@mdx-js/tag'

// can only be used inside pages
// cannot be used in wrapPageElement
export const Layout = props => {
  const { Root, ...components } = useMDXComponents()
  console.log(Root, components)
  return (
    <>
      {props.children}
    </>
  )
}

// theme context not available here
export const wrapPageElement = ({ element, props }) =>
  <Layout>
    {element}
  </Layout>
