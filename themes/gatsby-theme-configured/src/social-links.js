import React from 'react'
import get from 'lodash.get'
import Instagram from './instagram-icon'
import Facebook from './facebook-icon'
import Twitter from './twitter-icon'
import Link from './link'

const css = {
  root: theme => ({
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: -1 * get(theme, 'space.2'),
    marginRight: -1 * get(theme, 'space.2'),
  }),
  li: {
  },
  link: theme => ({
    color: 'inherit',
    textDecoration: 'none',
    padding: get(theme, 'space.2'),
    '&:hover': {
      color: get(theme, 'colors.link'),
    }
  }),
}

export default ({
  instagram,
  facebook,
  twitter,
  ...props
}) =>
  <ul
    {...props}
    css={css.root}>
    {instagram && (
      <li css={css.li}>
        <Link
          to={'https://instagram.com/' + instagram}
          title='Instagram'
          css={css.link}>
          <Instagram />
        </Link>
      </li>
    )}
    {facebook && (
      <li css={css.li}>
        <Link
          to={'https://facebook.com/' + facebook}
          title='Facebook'
          css={css.link}>
          <Facebook />
        </Link>
      </li>
    )}
    {twitter && (
      <li css={css.li}>
        <Link
          to={'https://twitter.com/' + twitter}
          title='Twitter'
          css={css.link}>
          <Twitter />
        </Link>
      </li>
    )}
  </ul>
