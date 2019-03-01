import React from 'react'
import Container from './container'

export default ({
  maxWidth,
  padding,
  children,
  ...props
}) =>
  <footer
    {...props}
    css={{
      display: 'flex',
      alignItems: 'center',
      minHeight: 64,
    }}>
    <Container
      padding={padding}
      maxWidth={maxWidth}>
      {children}
    </Container>
  </footer>
