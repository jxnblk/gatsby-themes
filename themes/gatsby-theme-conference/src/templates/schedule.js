import { graphql } from 'gatsby'
import Schedule from '../components/schedule'

export default Schedule

export const pageQuery = graphql`
  query {
    allScheduleYaml {
      edges {
        node {
          date
          time
          title
          description
          speaker
        }
      }
    }
  }
`
