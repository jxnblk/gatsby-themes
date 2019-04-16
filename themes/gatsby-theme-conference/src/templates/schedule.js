import { graphql } from 'gatsby'
import Schedule from '../layouts/schedule'

export default Schedule

export const pageQuery = graphql`
  query {
    allScheduleYaml {
      edges {
        node {
          date(formatString: "ddd, MMM Do h:mm a")
          title
          description
          speaker
        }
      }
    }
  }
`
