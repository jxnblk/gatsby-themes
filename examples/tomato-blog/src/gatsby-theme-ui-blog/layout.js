/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Global } from '@emotion/core'
import { Link } from 'gatsby'

export default props =>
  <div
    sx={{
      maxWidth: 768,
      mx: 'auto',
      px: 3,
    }}>
    <Global
      styles={{
        body: { margin: 0 }
      }}
    />
    <header
      sx={{
        py: 3,
      }}>
      <Link
        to='/'
        sx={{
          color: 'inherit',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}>
        gatsby-theme-tomato
      </Link>
    </header>
    <main>
      {props.children}
    </main>
  </div>
