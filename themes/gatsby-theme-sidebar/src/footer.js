import React from 'react'
import Container from './container'

export default ({
  maxWidth,
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
    <Container maxWidth={maxWidth}>
      {children}
    </Container>
  </footer>
