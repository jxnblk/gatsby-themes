import React from 'react'
import { useLayout } from './layout'
import Container from './container'

const Overlay = props =>
  <div
    {...props}
    css={{
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }}
  />

const Root = ({
  breakpoint,
  top,
  width,
  open,
  ...props
}) =>
  <Container
    {...props}
    css={{
      width,
      top,
      maxHeight: `calc(100vh - ${top}px)`,
      minWidth: 0,
      flex: 'none',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
      backgroundColor: 'white',
      position: 'fixed',
      left: 0,
      bottom: 0,
      transition: 'transform .2s ease-out',
      transform: open ? 'none' : 'translate(-100%)',
      [`@media screen and (min-width: ${breakpoint})`]: {
        position: 'sticky',
        transform: 'none',
      }
    }}
  />

export default ({
  open,
  width = 256,
  onDismiss,
  ...props
}) => {
  const { breakpoint, headerHeight } = useLayout()

  return (
    <>
      {open && (
        <Overlay
          onClick={onDismiss}
        />
      )}
      <Root
        {...props}
        width={width}
        breakpoint={breakpoint}
        top={headerHeight}
        open={open}
      />
    </>
  )
}
