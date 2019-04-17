const fs = require('fs')
const path = require('path')
const util = require('util')
const readdir = require('recursive-readdir')
const Debug = require('debug')
const pkg = require('./package.json')

// const readdir = util.promisify(fs.readdir)

const debug = Debug(pkg.name)

exports.sourceNodes = async ({
  store,
  actions,
  createNodeId,
  createContentDigest
}) => {
  debug('creating theme info nodes')
  const state = store.getState()

  const themes = state.themes.themes.map(theme => ({
    name: theme.themeName,
    dir: theme.themeDir,
    spec: theme.themeSpec,
  }))

  themes.forEach(theme => {
    const content = JSON.stringify(theme)
    actions.createNode({
      ...theme,
      id: createNodeId(`${pkg.name}-${theme.name}`),
      parent: null,
      children: [],
      internal: {
        type: 'Theme',
        mediaType: 'application/json',
        content,
        contentDigest: createContentDigest(theme),
      }
    })
  })

  const srcDirectories = await readdir(path.resolve('src'))

  srcDirectories.forEach(directory => {
    console.log('directory', typeof directory, directory)
    actions.createNode({
      directory,
      id: createNodeId(`${pkg.name}-src-${directory}`),
      parent: null,
      children: [],
      internal: {
        type: 'SourceDirectory',
        mediaType: 'application/json',
        content: JSON.stringify(directory),
        contentDigest: createContentDigest(directory),
      }
    })
  })
}
