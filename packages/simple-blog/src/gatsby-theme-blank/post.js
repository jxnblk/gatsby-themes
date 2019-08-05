/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../layout'

export default ({
  title,
  date,
  children,
}) =>
  <Layout>
    {children}
  </Layout>
