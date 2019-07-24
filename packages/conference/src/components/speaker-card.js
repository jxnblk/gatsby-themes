/** @jsx jsx */
import { Styled, jsx, Flex } from 'theme-ui'
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
      sx={{
        mb: 3,
      }}
    />
    <Styled.h3>
      {name}
    </Styled.h3>
    <Styled.div
      sx={{
        fontSize: 1,
        fontWeight: 'bold',
        mb: 2,
      }}>
      {company}
    </Styled.div>
    <Styled.p
      sx={{
        mb: 0,
      }}>
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
