import { graphql } from 'gatsby'
import Speakers from '../layouts/speakers'

export default Speakers

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
  }
`
