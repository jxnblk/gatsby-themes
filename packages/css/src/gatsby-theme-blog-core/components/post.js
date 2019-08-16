import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Post } from '../..'

export default props => {
  const {
    title,
    date,
    excerpt,
    keywords,
    tags,
    body,
  } = props.data.blogPost

  const children = React.createElement(MDXRenderer, {
    children: body,
  })

  return React.createElement(Post, {
    ...props,
    title,
    date,
    excerpt,
    keywords,
    tags,
    children,
  })
}
