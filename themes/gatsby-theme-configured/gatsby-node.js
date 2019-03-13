const merge = require('lodash.merge')
const defaults = require('./config')

module.exports.sourceNodes = ({
  actions,
  createNodeId,
  createContentDigest,
}, _opts = {}) => {
  const opts = merge(defaults, _opts)
  const { createNode } = actions
  const node = Object.assign({}, opts, {
    id: createNodeId('gatsby-theme-configured'),
    parent: null,
    children: [],
    internal: {
      type: 'ThemeConfig',
      mediaType: 'application/json',
      content: JSON.stringify(opts),
      contentDigest: createContentDigest(opts),
    },
  })
  createNode(node)
}
