import React from 'react'
import Root from './root'

export const wrapPageElement = ({ element, props }) =>
  <Root {...props}>
    {element}
  </Root>

export { default as Root } from './root'
export { default as Container } from './container'
export { default as Layout } from './layout'
export { default as Header } from './header'
export { default as Main } from './main'
export { default as Footer } from './footer'
export { default as SocialLinks } from './social-links'
export { default as Navigation } from './navigation'
export { default as Link } from './link'

export { default as BurgerIcon } from './burger-icon'
export { default as CloseIcon } from './close-icon'
export { default as FacebookIcon } from './facebook-icon'
export { default as InstagramIcon } from './instagram-icon'
export { default as TwitterIcon } from './twitter-icon'

export * from './hooks'
export * from './context'
