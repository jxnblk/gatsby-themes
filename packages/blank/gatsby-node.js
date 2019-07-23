const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const mkdirp = require('mkdirp')
const get = require('lodash.get')

exports.onPreBootstrap = ({ store }) => {
  const { program } = store.getState()
  const dir = path.join(program.directory, `src/posts`)
  mkdirp.sync(dir)
}

const mdxResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  })
  return result
}

const resolveTitle = async (...args) => {
  const headings = await mdxResolverPassthrough('headings')(...args)
  return get(headings, '0.value', '')
}

exports.sourceNodes = ({ actions, schema }) => {
  actions.createTypes(
    schema.buildObjectType({
      name: 'Post',
      fields: {
        id: {
          type: 'ID!',
        },
        slug: {
          type: 'String!',
        },
        date: {
          type: 'Date',
          extensions: {
            dateformat: {}
          }
        },
        title: {
          type: 'String',
          resolve: resolveTitle,
        },
        body: {
          type: 'String!',
          resolve: mdxResolverPassthrough('body'),
        },
      },
      interfaces: [ 'Node' ]
    })
  )
}

exports.onCreateNode = ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
}) => {
  if (node.internal.type !== 'Mdx') return
  const parent = getNode(node.parent)
  if (parent.sourceInstanceName !== 'posts') return
  const child = getNode(node.id)
  const slug = createFilePath({ node, getNode })
  const title = get(node, 'headings[1].value', '')
  const date = get(node, 'exports.date',
    get(node, 'frontmatter.date')
  )

  actions.createNode({
    title,
    date,
    slug,
    id: createNodeId(`${node.id} >>> Post`),
    parent: node.id,
    children: [],
    internal: {
      type: 'Post',
      contentDigest: createContentDigest({
        slug,
        date,
        body: node.rawBody,
      }),
      content: node.rawBody,
      description: 'Blog Posts',
    },
  })

  actions.createParentChildLink({
    parent,
    child: node,
  })
}



exports.createPages = async ({
  graphql,
  actions,
}) => {

  const result = await graphql(`
    {
      allPost(
        sort: {
          fields: date,
          order: DESC
        }
      ) {
        edges {
          node {
            id
            slug
            date
            title
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.log(result.errors)
    return
  }
  const posts = result.data.allPost.edges.map(edge => edge.node)

  posts.forEach(post => {
    actions.createPage({
      path: post.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        id: post.id,
      },
    })
  })

  const filtered = await graphql(`
    {
      allPost(
        sort: { fields: date, order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  if (filtered.errors) {
    console.log(filtered.errors)
    return
  }
  const index = filtered.data.allPost.edges.map(edge => edge.node)
  const limit = 16
  const length = Math.ceil(index.length / limit)

  Array.from({ length }).forEach((_, i) => {
    const previousIndex = i
    const nextIndex = i + 2
    const previous = (i > 0) ? (
      previousIndex === 1
        ? '/'
        : '/' + previousIndex + ''
    ) : ''

    const next = nextIndex <= length ? '/' + nextIndex : ''
    actions.createPage({
      path: i === 0 ? '/' : '/' + (i + 1),
      component: require.resolve('./src/templates/posts.js'),
      context: {
        previous,
        next,
        limit,
        skip: i * limit,
      },
    })
  })
}
