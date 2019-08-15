/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import Layout from './layout'

export default ({
  title,
  date,
  children,
  keywords,
  tags,
}) =>
  <Styled.root>
    <Layout>
      <Styled.h1>{title}</Styled.h1>
      <div>{date}</div>
      {children}
    </Layout>
  </Styled.root>
