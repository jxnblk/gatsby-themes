const defaults = {
  text: '',
  background: '',
  primary: '',
  secondary: '',
  highlight: '',
  muted: '',
}

// this might be overkill
module.exports.sourceNodes = ({
  actions,
  createNodeId,
  createContentDigest,
}, opts = {}) => {
  const { createNode } = actions
  const { colors = {} } = opts
  const obj = Object.assign({}, defaults, colors)
  const arr = Object.keys(obj).map(key => ({
    key,
    value: obj[key]
  }))

  arr.forEach(color => {
    createNode(Object.assign({}, color, {
      id: createNodeId(`colors-${color.key}`),
      parent: null,
      children: [],
      internal: {
        type: 'Colors',
        mediaType: 'application/json',
        content: JSON.stringify(color),
        contentDigest: createContentDigest(color),
      }
    }))
  })
}
