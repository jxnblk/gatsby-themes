import React from 'react'
import colors from '../colors'

export default ({
  Layout,
  Header,
  Main,
  Sidebar,
  Content,
  Footer,
  children,
}) =>
  <Layout
    css={{
      color: colors.black
    }}>
    <Header
      css={{
        color: 'white',
        backgroundColor: colors.chocolate,
      }}>
      sidebar sunset
    </Header>
    <Main>
      <Sidebar
        css={{
          backgroundColor: colors.green,
        }}>
      </Sidebar>
      <Content>
        {children}
      </Content>
    </Main>
    <Footer
      css={{
        backgroundColor: colors.peach,
      }}>
    </Footer>
  </Layout>
