import React from 'react'
import { graphql } from 'gatsby'
import Landing from '../layouts/index'

export default props => {
  const { data } = props
  const speakers = data.allSpeakersYaml.edges.map(edge => edge.node)
  const schedule = data.allScheduleYaml.edges.map(edge => edge.node)
  const sponsors = data.allSponsorsYaml.edges.map(edge => edge.node)
  const mcs = data.allMcYaml.edges.map(edge => edge.node)
  const { venue } = data.dataYaml

  return (
    <Landing
      {...props}
      speakers={speakers}
      schedule={schedule}
      sponsors={sponsors}
      mcs={mcs}
      venue={venue}
    />
  )
}

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
          tier
        }
      }
    }
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
    allMcYaml {
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
    dataYaml {
      venue {
        title
        address
        description
        url
        mapURL
        image
      }
    }
  }
`
