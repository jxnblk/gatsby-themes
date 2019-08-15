/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'
import Layout from './layout'

export default ({
  posts,
  ...props
}) =>
  <Styled.root>
    <Layout {...props}>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={post.slug}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  </Styled.root>
