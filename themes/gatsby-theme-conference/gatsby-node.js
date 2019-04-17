const fs = require('fs-extra')
const path = require('path')
const mkdirp = require('mkdirp')
const Debug = require('debug')
const pkg = require('./package.json')

const debug = Debug(pkg.name)

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
