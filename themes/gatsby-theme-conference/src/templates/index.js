import { graphql } from 'gatsby'
import Landing from '../components/landing'

export default Landing

export const pageQuery = graphql`
  query {
    allSpeakersYaml {
      edges {
        node {
          id
          name
          bio
          image
          company
          twitter
          github
        }
      }
    }
    allSponsorsYaml {
      edges {
        node {
          id
          name
          url
        }
      }
    }
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
    dataYaml {
      venue {
        title
        address
        description
      }
    }
  }
`
