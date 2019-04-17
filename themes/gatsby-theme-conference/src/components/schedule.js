import React from 'react'
import { Link } from 'gatsby'
import { Styled } from 'theme-ui'
import { Box, Container } from 'theme-ui/layout'
import groupBy from 'lodash.groupby'
import List from './list'
import SectionHeading from './section-heading'
import ScheduleItem from './schedule-item'

export default ({
  schedule = []
}) => {
  const days = groupBy(schedule, 'date')

  return (
    <Box
      id='schedule'
      py={5}>
      <Container>
        <SectionHeading>
          Schedule
        </SectionHeading>
        {Object.keys(days).map(date => (
          <div key={date}>
            <Styled.h3>
              {date}
            </Styled.h3>
            <List>
              {days[date].map(item => (
                <li key={item.time}>
                  <ScheduleItem {...item} />
                </li>
              ))}
            </List>
          </div>
        ))}
        <Styled.a
          as={Link}
          to='/schedule'>
          View full schedule
        </Styled.a>
      </Container>
    </Box>
  )
}
