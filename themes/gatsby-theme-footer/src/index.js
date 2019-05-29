import React from 'react'
import Footer from './footer'

export {
  default,
  default as Footer
} from './footer'

export const wrapPageElement = ({ element, props }, opts) => {
  if (!opts.siteWidth) return element

  return (
    <>
      {element}
      <Footer />
    </>
  )
}
