import { graphql } from 'gatsby'
import Schedule from '../layouts/schedule'

export default Schedule

export const pageQuery = graphql`
  query {
    allScheduleYaml {
      edges {
        node {
          date(formatString: "ddd, MMM Do")
          time: date(formatString: "h:mm a")
          title
          description
          speaker {
            name
            company
          }
        }
      }
    }
  }
`
