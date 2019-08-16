import React from 'react'
import { Link } from 'gatsby'
import Layout from 'gatsby-theme-css/src/layout'
import ToggleColorMode from 'gatsby-theme-css/src/toggle-color-mode'
import css from './header.module.css'

export default props =>
  <Layout {...props}>
    <header className={css.header}>
      <Link to='/'>Home</Link>
      <div className={css.spacer} />
      <ToggleColorMode />
    </header>
    {props.children}
  </Layout>
