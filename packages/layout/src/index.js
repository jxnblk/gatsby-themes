import minimatch from 'minimatch'

export { default as Layout } from './layout'
export { default as Header } from './header'
export { default as Footer } from './footer'
export { default as Sidebar } from './sidebar'

export const wrapPageElement = ({ element, props }, opts = {}) => {
  const {
    wrap = false,
    matchPath,
  } = opts
  if (!opts.wrap) return element

  if (matchPath) {
    const matches = minimatch(props.location.pathname, matchPath)
    if (!matches) return element
  }

  return (
    <Layout {...props}>
      <Header />
      {element}
      <Footer />
    </Layout>
  )
}
