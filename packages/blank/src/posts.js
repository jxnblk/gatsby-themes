import React from 'react'
import { Link } from 'gatsby'

export default props =>
  <div>
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>
          <Link to={post.slug}>
            {post.title || post.slug}
          </Link>
        </li>
      ))}
    </ul>
    <pre
      children={JSON.stringify(props, null, 2)}
    />
  </div>
