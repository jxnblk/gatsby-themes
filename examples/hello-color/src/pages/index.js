import React from 'react'

const Invert = props =>
  <div
    {...props}
    css={{
      color: 'var(--background)',
      backgroundColor: 'var(--color)',
    }}
  />

export default props =>
  <>
    <Invert
      css={{
        padding: 32,
      }}>
      <h1
        css={{
          fontSize: 48,
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
        }}>
        gatsby-theme-hello-color
      </h1>
      <small>Click for a random color</small>
    </Invert>
  </>
