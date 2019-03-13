import React from 'react'
import get from 'lodash.get'
import Link from './link'
import Button from './button'
import CloseIcon from './close-icon'
import { useThemeContext } from './context'

const css = {
  root: props => theme => ({
    paddingLeft: get(theme, 'space.2'),
    paddingRight: get(theme, 'space.2'),
    [`@media screen and (max-width:${get(theme, 'breakpoint')}px)`]: {
      display: props.open ? 'block' : 'none',
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      paddingLeft: 0,
      paddingRight: 0,
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
      backgroundColor: get(theme, 'colors.header.background'),
    }
  }),
  ul: theme => ({
    listStyle: 'none',
    display: 'flex',
    padding: 0,
    margin: 0,
    [`@media screen and (max-width:${get(theme, 'breakpoint')}px)`]: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '100vw',
      minHeight: '100vh',
      paddingTop: get(theme, 'space.5'),
      paddingBottom: get(theme, 'space.5'),
      minWidth: 0,
      flex: 'none',
    }
  }),
  li: {
    display: 'flex',
  },
  link: theme => ({
    fontSize: get(theme, 'fontSizes.1'),
    fontWeight: get(theme, 'fontWeights.bold'),
    paddingLeft: get(theme, 'space.2'),
    paddingRight: get(theme, 'space.2'),
    paddingTop: get(theme, 'space.3'),
    paddingBottom: get(theme, 'space.3'),
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: get(theme, 'colors.link'),
    },
    '&:focus': {
      outline: 'none',
      color: get(theme, 'colors.link'),
    },
    [`@media screen and (max-width:${get(theme, 'breakpoint')}px)`]: {
      fontSize: get(theme, 'fontSizes.4'),
    }
  }),
  button: theme => ({
    alignSelf: 'center',
    marginLeft: get(theme, 'space.2'),
    marginRight: get(theme, 'space.2'),
    [`@media screen and (max-width:${get(theme, 'breakpoint')}px)`]: {
      fontSize: get(theme, 'fontSizes.3'),
      marginTop: get(theme, 'space.3'),
      paddingLeft: get(theme, 'space.4'),
      paddingRight: get(theme, 'space.4'),
      paddingTop: get(theme, 'space.3'),
      paddingBottom: get(theme, 'space.3'),
    }
  }),
  close: theme => ({
    display: 'none',
    [`@media screen and (max-width:${get(theme, 'breakpoint')}px)`]: {
      display: 'block',
      position: 'fixed',
      top: 0,
      right: 0,
      padding: get(theme, 'space.3'),
      color: 'inherit',
      backgroundColor: 'transparent',
      border: 'none',
      '&:focus': {
        color: get(theme, 'colors.link'),
        outline: 'none'
      }
    }
  }),
}

export default ({
  open = false,
  navigation = [],
  button,
}) => {
  const { setMenuOpen } = useThemeContext()
  return (
    <nav css={css.root({ open })}>
      <ul css={css.ul}>
        {navigation.map(({ name, path }) => (
          <li key={name + path} css={css.li}>
            <Link to={path} css={css.link}>
              {name}
            </Link>
          </li>
        ))}
        {button && button.text && (
          <li css={css.li}>
            <Button to={button.path} css={css.button}>
              {button.text}
            </Button>
          </li>
        )}
      </ul>
      <button
        title='Close Menu'
        onClick={e => {
          setMenuOpen(false)
        }}
        css={css.close}>
        <CloseIcon />
      </button>
    </nav>
  )
}
