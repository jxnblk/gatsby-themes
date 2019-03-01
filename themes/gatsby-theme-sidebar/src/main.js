import React from 'react'
import Container from './container'

export default ({
  maxWidth,
  ...props
}) => {
  const children = React.Children.toArray(props.children)
    .map((child, i) => React.cloneElement(child, {
      index: i
    }))

  return (
    <Container
      {...props}
      as='main'
      padding={0}
      maxWidth={maxWidth}
      css={{
          display: 'flex',
          flex: '1 1 auto',
          width: '100%',
          minWidth: 0,
      }}
      children={children}
    />
    /*
      <main
        {...props}
        css={{
        }}>
        {children}
      </main>
    </Container>
    */
  )
}
