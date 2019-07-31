exports.createPages = ({ actions, pathPrefix }, opts) => {

  const basePath = '/hi'
  const matchPath = basePath + '/*'

  actions.createPage({
    path: basePath,
    matchPath,
    component: require.resolve('./src/template'),
    context: {
      opts: {
        pathPrefix,
        basePath,
        matchPath,
      }
    },
  })
}
