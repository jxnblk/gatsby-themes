import React from 'react'
import { Styled } from 'theme-ui'
import { Container } from 'theme-ui/layout'
import Layout from '../components/layout'
import List from '../components/list'

export default ({
  data,
}) => {
  const schedule = data.allScheduleYaml.edges.map(edge => edge.node)
  return (
    <Layout>
      <Container>
        <Styled.h1>
          Schedule
        </Styled.h1>
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
              <Styled.p>
                {item.description}
              </Styled.p>
            </li>
          ))}
        </List>
      </Container>
    </Layout>
  )
}
