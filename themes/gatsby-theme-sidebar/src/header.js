import React from 'react'
import Container from './container'

export const Header = ({
  maxWidth,
  children,
  height = 64,
  fixed = true,
  ...props
}) => {
  return (
    <>
      {fixed && (
        <div
          css={{
            height
          }}
        />
      )}
      <header
        {...props}
        css={fixed ? {
          position: 'fixed',
          zIndex: 2,
          top: 0,
          right: 0,
          left: 0,
          backgroundColor: 'white',
        } : null}>
        <Container maxWidth={maxWidth}>
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              minHeight: height,
            }}>
            {children}
          </div>
        </Container>
      </header>
    </>
  )
}

Header.isHeader = true

export default Header
