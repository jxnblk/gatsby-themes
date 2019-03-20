import React from 'react'
import { useMDXComponents } from '@mdx-js/tag'
import styled from '@emotion/styled'

const Container = styled.div({
  maxWidth: '48em',
  margin: 'auto',
  padding: 32,
})

export default props => {
  const { Root, ...components } = useMDXComponents()

  return (
    <Container>
      <Root>
        {props.children}
      </Root>
    </Container>
  )
}
