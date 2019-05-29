import React from 'react'
import Footer from './Footer'

export {
  default,
  default as Footer
} from './Footer'

export const wrapPageElement = ({ element, props }, opts) => {
  if (!opts.siteWidth) return element

  return (
    <>
      {element}
      <Footer />
    </>
  )
}
