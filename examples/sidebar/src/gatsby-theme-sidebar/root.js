import React, { useState } from 'react'
import {
  Spacer,
} from 'gatsby-theme-sidebar'

const MenuButton = props =>
  <button
    {...props}
    css={{
      appearance: 'none',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      padding: 8,
      color: 'inherit',
      backgroundColor: 'transparent',
      border: 'none',
    }}
  />

const Title = props =>
  <h1
    {...props}
    css={{
      margin: 0,
      fontSize: 16,
    }}
  />

const hamburger = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    fill='currentColor'
    viewBox='0 0 24 24'>
    <path
      d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'
    />
  </svg>
)

export default ({
  Layout,
  Header,
  Main,
  Sidebar,
  Content,
  Footer,
  MobileOnly,
  breakpoint,
  ...props
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Layout>
      <Header
        maxWidth={1280}
        css={{
          color: 'white',
          backgroundColor: 'black'
        }}>
        <Title>
          Demo of gatsby-theme-sidebar
        </Title>
        <Spacer />
        <MobileOnly>
          <MenuButton
            title='toggleMenu'
            onClick={e => {
              setSidebarOpen(!sidebarOpen)
            }}
          >
            {hamburger}
          </MenuButton>
        </MobileOnly>
      </Header>
      <Main maxWidth={1280}>
        <Sidebar
          open={sidebarOpen}
          onDismiss={e => {
            setSidebarOpen(false)
          }}
          css={{
            paddingTop: 32,
            paddingBottom: 32,
            [`@media screen and (max-width: ${breakpoint})`]: {
              backgroundColor: '#eee',
            }
          }}>
          This is the sidebar
        </Sidebar>
        <Content>
          {props.children}
        </Content>
      </Main>
      <Footer maxWidth={1280}
        css={{
          color: 'white',
          backgroundColor: 'black'
        }}>
        <small>Custom footer</small>
      </Footer>
    </Layout>
  )
}
