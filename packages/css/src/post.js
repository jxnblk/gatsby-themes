import React from 'react'
import Layout from './layout'

export default props =>
  <Layout {...props}>
    <h1>{props.title}</h1>
    <div>{props.date}</div>
    {props.children}
  </Layout>
