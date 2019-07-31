import React from 'react'
import { Link } from 'gatsby'
import { navigate, Router } from '@reach/router'

const Route = props =>
  <div>
    {props.content}
  </div>

export default props => {
  const {
    basePath,
    pathPrefix,
    matchPath,
  } = props.pageContext.opts

  return (
    <div>
      <pre children={JSON.stringify(props.pageContext, null, 2)} />
      Template
      <div>
        <Link to={basePath + '/hello'}>Hello</Link>
        <br />
        <Link to={basePath + '/beep'}>Beep</Link>
        <br />
        <Link to={basePath + '/meow'}>Meow</Link>
      </div>
      <Router
        basepath={pathPrefix + basePath}
      >
        <Route
          path='/hello'
          content={(
            <h1>Hello</h1>
          )}
        />
        <Route
          path='/beep'
          content={(
            <h1>Beep</h1>
          )}
        />
        <Route
          path='/meow'
          content={(
            <h1>Meow</h1>
          )}
        />
      </Router>
    </div>
  )
}
