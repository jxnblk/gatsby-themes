/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Layout, Header, Footer } from 'gatsby-theme-layout'

export default ({ children }) =>
  <Styled.root>
    <Layout>
      <Header />
        {children}
      <Footer />
    </Layout>
  </Styled.root>
