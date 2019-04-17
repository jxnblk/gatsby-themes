import React from 'react'
import { Styled, css } from 'theme-ui'
import { Box, Flex, Container } from 'theme-ui/layout'
import SectionHeading from './section-heading'

export default ({
  title,
  description,
  image,
  address,
  url,
  mapURL,
}) =>
  <Box
    id='venue'
    py={5}>
    <Container>
      <SectionHeading>
        Venue
      </SectionHeading>
      <Flex
        mx={-3}
        alignItems='center'
        flexWrap='wrap'>
        <Box
          flex='none'
          p={3}
          width={[1, 1/2 ]}>
          <Styled.img
            src={image}
            css={{
              width: '100%',
            }}
          />
        </Box>
        <Box
          flex='none'
          p={3}
          width={[1, 1/2 ]}>
          <Styled.h3>{title}</Styled.h3>
          <Styled.p
            css={css({
              mb: 2
            })}>
            {address}
          </Styled.p>
          <Styled.p
            css={css({
              my: 0
            })}>
            {description}
          </Styled.p>
          <Box>
            <Styled.a href={mapURL}>View Map</Styled.a>
            {' | '}
            <Styled.a href={url}>Website</Styled.a>
          </Box>
        </Box>
      </Flex>
    </Container>
  </Box>
