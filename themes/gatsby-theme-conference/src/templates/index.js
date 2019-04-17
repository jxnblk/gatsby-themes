import { graphql } from 'gatsby'
import Landing from '../layouts/index'

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
          logo
        }
      }
    }
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
    allMcYaml {
      edges {
        node {
          name
          bio
          image
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
