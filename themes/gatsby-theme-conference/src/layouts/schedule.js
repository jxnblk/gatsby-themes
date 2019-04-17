import React from 'react'
import { Styled } from 'theme-ui'
import { Container } from 'theme-ui/layout'
import groupBy from 'lodash.groupby'
import Layout from '../components/layout'
import List from '../components/list'

export default ({
  data,
}) => {
  const schedule = data.allScheduleYaml.edges.map(edge => edge.node)
  const days = groupBy(schedule, 'date')

  return (
    <Layout>
      <Container>
        <Styled.h1>
          Schedule
        </Styled.h1>
        {Object.keys(days).map(date => (
          <div key={date}>
            <Styled.h3>
              {date}
            </Styled.h3>
            <List>
              {days[date].map(item => (
                <li key={item.time}>
                  <Styled.h3>
                    {item.time}
                  </Styled.h3>
                  <Styled.p>
                    {item.title}
                  </Styled.p>
                  <Styled.p>
                    {item.description}
                  </Styled.p>
                </li>
              ))}
            </List>
          </div>
        ))}
      </Container>
    </Layout>
  )
}
