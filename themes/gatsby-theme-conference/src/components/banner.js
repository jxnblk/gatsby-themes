import React from 'react'
import { Styled, css } from 'theme-ui'
import { Box } from 'theme-ui/layout'
import useSiteMetadata from '../use-site-metadata'

export default props => {
  const {
    title,
    description
  } = useSiteMetadata()

  return (
    <Box
      {...props}
      px={4}
      py={5}>
      <Styled.h1>
        {title}
      </Styled.h1>
      <Styled.p>
        {description}
      </Styled.p>
      <button>
        Buy Tickets
      </button>
    </Box>
  )
}
