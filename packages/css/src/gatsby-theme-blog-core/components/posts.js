import React from 'react'
import { Posts } from '../..'

export default props => {
  const posts = props.data.allBlogPost.edges
    .map(e => e.node)

  return React.createElement(Posts, {
    ...props,
    posts,
  })
}
