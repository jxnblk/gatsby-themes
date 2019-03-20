import React from 'react'
import { useMDXComponents, MDXProvider } from '@mdx-js/tag'
import styled from '@emotion/styled'

const Container = styled.div({
  maxWidth: '48em',
  margin: 'auto',
  padding: 32,
})

// these can completely override the theme's components
const customComponents = outerComponents => {
  return {
    ...outerComponents,
    // a: ({ href, ...props }) => <Link to={href} {...props} />,
  }
}

export const Layout = props => {
  const { Root, ...components } = useMDXComponents()

  return (
    <Container>
      <MDXProvider components={customComponents}>
        <Root>
          {props.children}
        </Root>
      </MDXProvider>
    </Container>
  )
}

export const wrapPageElement = ({ element, props }) =>
  <>
    {element}
  </>
