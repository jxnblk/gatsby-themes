import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Link as RebassLink } from 'rebass'

export default props =>
  <RebassLink
    as={GatsbyLink}
    {...props}
  />
