/** @jsx jsx */
import { Styled, jsx, Container } from 'theme-ui'
import groupBy from 'lodash.groupby'
import Layout from '../components/layout'
import List from '../components/list'
import ScheduleItem from '../components/schedule-item'

export default ({
  data,
}) => {
  const schedule = data.allScheduleYaml.edges.map(edge => edge.node)
  const days = groupBy(schedule, 'date')

  return (
    <Layout>
      <Container>
        <Styled.h1
          sx={{
            mb: 5,
          }}>
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
                  <ScheduleItem {...item} />
                </li>
              ))}
            </List>
          </div>
        ))}
      </Container>
    </Layout>
  )
}
