import React from 'react'
import Header from './header'

export {
  default,
  default as Header
} from './header'

export const wrapPageElement = ({ element, props }, opts) => {
  if (!opts.siteWidth) return element

  return (
    <>
      <Header />
      {element}
    </>
  )
}
