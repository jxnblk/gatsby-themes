import React from 'react'
import { Styled, css } from 'theme-ui'
import { Flex } from 'theme-ui/layout'
import {
  Twitter,
  GitHub
} from 'react-feather'
import BackgroundImage from './background-image'
import Card from './card'
import IconLink from './icon-link'

export default ({
  id,
  name,
  image,
  bio,
  company,
  twitter,
  github,
  ...props
}) =>
  <Card
    {...props}>
    <BackgroundImage
      src={image}
      css={css({
        mb: 3,
      })}
    />
    <Styled.h3>
      {name}
    </Styled.h3>
    <Styled.div
      css={css({
        fontSize: 1,
        fontWeight: 'bold',
        mb: 2,
      })}>
      {company}
    </Styled.div>
    <Styled.p
      css={css({
        mb: 0,
      })}>
      {bio}
    </Styled.p>
    <Flex mx={-2}>
      {twitter && (
        <IconLink href={twitter}>
          <Twitter />
        </IconLink>
      )}
      {github && (
        <IconLink href={github}>
          <GitHub />
        </IconLink>
      )}
    </Flex>
  </Card>
