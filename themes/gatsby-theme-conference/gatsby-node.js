const fs = require('fs-extra')
const path = require('path')
const mkdirp = require('mkdirp')
const Debug = require('debug')
const pkg = require('./package.json')

const debug = Debug(pkg.name)

const Landing = require.resolve('./src/templates/index')
const Speakers = require.resolve('./src/templates/speakers')
const Schedule = require.resolve('./src/templates/schedule')

exports.onPreBootstrap = ({ store }) => {
  const { program } = store.getState()

  const dir = path.join(program.directory, `src/data`)

  debug(`Initializing ${dir} directory`)
  mkdirp.sync(dir)

  // todo: find a better way to bootstrap site data
  const src = path.join(__dirname, 'src/data')
  const dest = path.resolve('src/data')
  if (src !== dest) {
    fs.copySync(src, dest)
  }
}

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
