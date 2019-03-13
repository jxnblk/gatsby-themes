import { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  query {
    themeConfig {
      colors {
        text
        background
        link
        hover
        heading
        border
        button {
          text
          background
          hover {
            text
            background
          }
        }
        pre {
          text
          background
        }
        code {
          text
          background
        }
        header {
          text
          background
        }
        footer {
          text
          background
        }
      }
      fonts {
        body
        heading
        monospace
      }
      lineHeights {
        body
        heading
      }
      fontSizes
      fontWeights {
        normal
        bold
        heading
      }
      space
      containerWidth
      radius
      breakpoint
      header {
        title
        logo {
          width
          height
          src
        }
        button {
          text
          path
        }
      }
      navigation {
        name
        path
      }
      footer {
        colophon
        links {
          name
          path
        }
        social {
          twitter
          facebook
          instagram
        }
      }
    }
  }
`

export const useThemeConfig = () => {
  const data = useStaticQuery(query)
  return data.themeConfig
}

export const useBodyStyle = style => {
  useEffect(() => {
    for (const key in style) {
      document.body.style[key] = style[key]
    }
    return () => {
      document.body.style.cssText = ''
    }
  }, [ style ])
}
