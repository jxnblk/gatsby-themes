import React, { useState } from 'react'
import { Link } from 'gatsby'
import {
  Spacer,
} from 'gatsby-theme-sidebar'
import colors from '../colors'

const NavLink = props =>
  <Link
    {...props}
    activeClassName='active'
    css={{
      display: 'block',
      color: 'inherit',
      textDecoration: 'none',
      fontWeight: 'bold',
      paddingLeft: 32,
      paddingRight: 32,
      paddingTop: 8,
      paddingBottom: 8,
      marginLeft: -32,
      marginRight: -32,
      '&.active': {
        color: colors.blue,
      }
    }}
  />

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
      '&:focus': {
        color: colors.blue,
        outline: `1px solid ${colors.blue}`,
      }
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
    <Layout
      css={{
        color: colors.black,
      }}>
      <Header
        css={{
          color: 'white',
          backgroundColor: colors.black,
        }}>
        <div
          css={{
            fontSize: 24,
            marginRight: 8,
          }}
          >🧬</div>
        <Title>
          gatsby-theme-sidebar
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
      <Main>
        <Sidebar
          width={320}
          open={sidebarOpen}
          onClick={e => {
            setSidebarOpen(false)
          }}
          onDismiss={e => {
            setSidebarOpen(false)
          }}
          css={{
            paddingTop: 32,
            paddingBottom: 32,
            backgroundColor: colors.gray,
          }}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/getting-started'>Getting Started</NavLink>
          <NavLink to='/customizing'>Customizing</NavLink>
        </Sidebar>
        <Content
          css={{
            paddingTop: 32,
            paddingBottom: 32,
          }}>
          {props.children}
        </Content>
      </Main>
      <Footer
        css={{
          color: 'white',
          backgroundColor: colors.black,
        }}>
          <a href='https://jxnblk.com'>
            <small>
              Made by Jxnblk
            </small>
          </a>
      </Footer>
    </Layout>
  )
}
