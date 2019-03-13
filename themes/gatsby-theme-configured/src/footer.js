import React from 'react'
import get from 'lodash.get'
import Link from './link'
import SocialLinks from './social-links'

const css = {
  root: theme => ({
    fontSize: get(theme, 'fontSizes.1'),
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: get(theme, 'space.4'),
    paddingBottom: get(theme, 'space.4'),
    color: get(theme, 'colors.footer.text'),
    backgroundColor: get(theme, 'colors.footer.background'),
    [`@media screen and (max-width:${get(theme, 'breakpoint')}px)`]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }
  }),
  colophon: theme => ({
    padding: get(theme, 'space.3'),
    // paddingRight: get(theme, 'space.3'),
  }),
  spacer: {
    margin: 'auto',
  },
  ul: theme => ({
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    [`@media screen and (max-width:${get(theme, 'breakpoint')}px)`]: {
      flexDirection: 'column',
      alignItems: 'center',
    }
  }),
  li: {
    display: 'flex',
  },
  link: theme => ({
    padding: get(theme, 'space.3'),
    fontWeight: get(theme, 'fontWeights.bold'),
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: get(theme, 'colors.link'),
    }
  }),
  social: theme => ({
    padding: get(theme, 'space.3'),
  })
}

export default ({
  colophon,
  links = [],
  social,
}) =>
  <footer css={css.root}>
    <div css={css.colophon}>
      {colophon}
    </div>
    <div css={css.spacer} />
    <ul css={css.ul}>
      {links.map(({ name, path }) => (
        <li key={name + path} css={css.li}>
          <Link to={path} css={css.link}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
    <SocialLinks
      {...social}
      css={css.social}
    />
  </footer>
