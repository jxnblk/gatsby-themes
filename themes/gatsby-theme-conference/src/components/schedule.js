import React from 'react'
import { Link } from 'gatsby'
import { Styled } from 'theme-ui'
import { Box, Container } from 'theme-ui/layout'
import List from './list'
import SectionHeading from './section-heading'

export default ({
  schedule = []
}) =>
  <Box
    id='schedule'
    py={5}>
    <Container>
      <SectionHeading>
        Schedule
      </SectionHeading>
      <List>
        {schedule.map(item => (
          <li key={item.date + item.time}>
            {item.date}
            <Styled.h3>
              {item.time}
            </Styled.h3>
            <Styled.p>
              {item.title}
            </Styled.p>
          </li>
        ))}
      </List>
      <Styled.a
        as={Link}
        to='/schedule'>
        View full schedule
      </Styled.a>
    </Container>
  </Box>
