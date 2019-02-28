import React from 'react'
import { useLayout } from './layout'

export default props => {
  const { breakpoint } = useLayout()
  return (
    <div
      {...props}
      css={{
        [`@media screen and (min-width: ${breakpoint})`]: {
          display: 'none'
        }
      }}
    />
  )
}
