import React from 'react'
import Container from './container'

export default ({
  maxWidth = 768,
  children,
  ...props
}) =>
  <div
    {...props}
    css={{
      minWidth: 0,
      width: '100%',
      flex: '1 1 auto',
    }}>
    <Container maxWidth={maxWidth}>
      {children}
    </Container>
  </div>
