
const Landing = require.resolve('./src/templates/index')
const Speakers = require.resolve('./src/templates/speakers')
const Schedule = require.resolve('./src/templates/schedule')

exports.createPages = async ({ graphql, actions }, opts = {}) => {
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
