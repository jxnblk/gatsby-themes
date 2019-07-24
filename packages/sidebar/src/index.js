import React from 'react'
import Root from './root'
import Layout from './layout'
import Header from './header'
import Main from './main'
import Content from './content'
import Sidebar from './sidebar'
import Footer from './footer'
import MobileOnly from './mobile-only'
import config from './_config'

export const wrapPageElement = ({ element, props }) =>
  <Root
    {...props}
    {...config}
    Layout={Layout}
    Header={Header}
    Main={Main}
    Sidebar={Sidebar}
    Content={Content}
    Footer={Footer}
    MobileOnly={MobileOnly}
    children={element}
  />

// component API
export { default as Root } from './root'
export { Layout, useLayout } from './layout'
export { default as Header } from './header'
export { default as Main } from './main'
export { default as Content } from './content'
export { default as Sidebar } from './sidebar'
export { default as Footer } from './footer'
export { default as MobileOnly } from './mobile-only'
export { default as Container } from './container'
export { default as Spacer } from './spacer'
