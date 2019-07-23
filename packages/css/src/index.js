import React from 'react'
import { Link } from 'gatsby'
import theme from './theme'
import Layout from './layout'
import { Root } from './root'
import css from './styles.module.css'

export {
  Context,
  useTheme,
  ToggleColorMode,
} from './root'

export const wrapRootElement = ({ element, props }) => {
  return (
    <Root theme={theme}>
      {element}
    </Root>
  )
}

const noflash = `
(function() {
  try {
    var mode = localStorage.getItem('theme-css-color-mode');
    if (!mode) return
    document.body.classList.add(mode);
  } catch (e) {}
})();
`

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: noflash
      }}
    />
  ])
}

export const Post = props => <Layout {...props} />

export const Posts = ({
  posts,
}) =>
  <Layout>
    <ul className={css.list}>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={post.slug}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
