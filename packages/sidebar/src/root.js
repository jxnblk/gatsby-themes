import React, { useState } from 'react'
import MobileOnly from './mobile-only'

export default ({
  Layout,
  Header,
  Main,
  Sidebar,
  Content,
  Footer,
  ...props
}) => {
  const [ sidebarOpen, setSidebarOpen ] = useState(false)

  return (
    <Layout>
      <Header maxWidth={1280}>
        <b>gatsby-theme-sidebar</b>
        <MobileOnly>
          <button onClick={e => setSidebarOpen(!sidebarOpen)}>
            Menu
          </button>
        </MobileOnly>
      </Header>
      <Main maxWidth={1280}>
        <Sidebar
          open={sidebarOpen}
          onDismiss={e => { setSidebarOpen(false) }}>
          <p>
            This is the Sidebar component
            You can put links and other things here.
          </p>
        </Sidebar>
        <Content>{props.children}</Content>
      </Main>
      <Footer maxWidth={1280}>
        <small>© 2019 Made by Jxnblk</small>
      </Footer>
    </Layout>
  )
}
