/** @jsx jsx */
import React from 'react'
import { jsx, Styled, Flex, Container } from 'theme-ui'
import SectionHeading from './section-heading'

export default ({
  title,
  description,
  image,
  address,
  url,
  mapURL,
}) =>
  <div
    id='venue'
    sx={{ py: 5 }}>
    <Container>
      <SectionHeading>
        Venue
      </SectionHeading>
      <Flex
        sx={{
          mx: -3,
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        <div
          sx={{
            flex: 'none',
            p: 3,
            width: [ '100%', '50%' ],
          }}>
          <Styled.img
            src={image}
            sx={{
              width: '100%',
            }}
          />
        </div>
        <div
          sx={{
            flex: 'none',
            p: 3,
            width: [ '100%', '50%' ],
          }}>
          <Styled.h3>{title}</Styled.h3>
          <Styled.p
            sx={{
              mb: 2
            }}>
            {address}
          </Styled.p>
          <Styled.p
            sx={{
              my: 0
            }}>
            {description}
          </Styled.p>
          <div>
            <Styled.a href={mapURL}>View Map</Styled.a>
            {' | '}
            <Styled.a href={url}>Website</Styled.a>
          </div>
        </div>
      </Flex>
    </Container>
  </div>
