
/* This isn't really needed...
const Landing = require.resolve('./src/templates/landing')
const Speakers = require.resolve('./src/templates/speakers')
const Schedule = require.resolve('./src/templates/Schedule')

exports.createPages = async ({ graphql, actions }, opts = {}) => {
  const result = await graphql(`
    query {
      speakers: allSpeakersYaml {
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
      sponsors: allSponsorsYaml {
        edges {
          node {
            id
            name
            url
          }
        }
      }
      schedule: allScheduleYaml {
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
      data: dataYaml {
        venue {
          title
          address
          description
        }
      }
    }
  `)

  if (result.errors) {
    console.log(result.errors)
    throw new Error('Could not query data', result.errors)
  }

  const {
    speakers,
    sponsors,
    schedule,
    data
  } = result.data

  actions.createPage({
    path: '/',
    component: Landing,
    context: {},
  })

  actions.createPage({
    path: '/speakers',
    component: Speakers,
    context: {},
  })

  actions.createPage({
    path: '/schedule',
    component: Schedule,
    context: {},
  })
}
*/
