import React from 'react'
import { Link } from 'gatsby'
import Layout from './layout'
import css from './posts.module.css'

export default ({
  posts,
}) =>
  <Layout>
    <ul className={css.list}>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={post.slug}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
