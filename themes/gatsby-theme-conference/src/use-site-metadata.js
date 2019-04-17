import { useStaticQuery, graphql } from 'gatsby'

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          twitter
          instagram
        }
      }
    }
  `)
  return data.site.siteMetadata
}
