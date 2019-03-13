import React from 'react'
import { withPrefix } from 'gatsby'
import get from 'lodash.get'
import Navigation from './navigation'
import Button from './button'
import BurgerIcon from './burger-icon'
import { useThemeContext } from './context'
import { useBodyStyle } from './hooks'

const css = {
  root: theme => ({
    display: 'flex',
    color: get(theme, 'colors.header.text'),
    backgroundColor: get(theme, 'colors.header.background'),
  }),
  logo: theme => ({
    alignSelf: 'center',
    margin: get(theme, 'space.2'),
    width: get(theme, 'header.logo.width'),
    height: get(theme, 'header.logo.height'),
  }),
  heading: theme => ({
    alignSelf: 'center',
    margin: 0,
    paddingLeft: get(theme, 'space.1'),
    paddingRight: get(theme, 'space.2'),
    fontSize: get(theme, 'fontSizes.3'),
  }),
  spacer: {
    margin: 'auto',
  },
  burger: theme => ({
    display: 'none',
    [`@media screen and (max-width:${get(theme, 'breakpoint')}px)`]: {
      display: 'block',
      paddingRight: get(theme, 'space.3'),
      color: 'inherit',
      backgroundColor: 'transparent',
      border: 'none',
      '&:focus': {
        color: get(theme, 'colors.link'),
        outline: 'none'
      }
    }
  })
}

// todo: hook up menu state
export default ({
  title,
  logo,
  navigation,
  button,
}) => {
  const { menuOpen, setMenuOpen } = useThemeContext()
  useBodyStyle({
    overflow: menuOpen ? 'hidden' : undefined
  })

  return (
    <header css={css.root}>
      <img
        src={withPrefix(logo.src)}
        css={css.logo}
        width={logo.width}
        height={logo.height}
      />
      <h1 css={css.heading}>
        {title}
      </h1>
      <div css={css.spacer} />
      <Navigation
        open={menuOpen}
        navigation={navigation}
        button={button}
      />
      <button
        title='Show Menu'
        onClick={e => {
          setMenuOpen(true)
        }}
        css={css.burger}>
        <BurgerIcon />
      </button>
    </header>
  )
}
