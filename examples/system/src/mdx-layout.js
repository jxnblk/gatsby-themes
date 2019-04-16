import React from 'react'
import { Container } from 'gatsby-theme-system'
import Layout from './layout'

export default props =>
  <Layout>
    <Container>
      {props.children}
    </Container>
  </Layout>
