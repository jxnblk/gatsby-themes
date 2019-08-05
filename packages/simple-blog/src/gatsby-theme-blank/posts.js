/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Layout from '../layout'

export default ({ posts }) =>
  <Layout>
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

