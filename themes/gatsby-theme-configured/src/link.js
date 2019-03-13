import React from 'react'
import { Link } from 'gatsby'
import isAbsolute from 'is-absolute-url'

export default ({
  to,
  ...props
}) => isAbsolute(to)
  ? <a href={to} {...props} />
  : <Link to={to} {...props} />
