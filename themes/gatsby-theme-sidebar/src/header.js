import React from 'react'
import Container from './container'

export const Header = ({
  maxWidth,
  padding,
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
        <Container
          padding={padding}
          maxWidth={maxWidth}>
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
