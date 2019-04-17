import React from 'react'
import { Styled, css } from 'theme-ui'
import BackgroundImage from './background-image'
import Card from './card'

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
      {' '}
      <span
        css={css({
          fontSize: 2,
          fontWeight: 'normal',
        })}>
        {company}
      </span>
    </Styled.h3>
    <Styled.p>
      {bio}
    </Styled.p>
  </Card>
