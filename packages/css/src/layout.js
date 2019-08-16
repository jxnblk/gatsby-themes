import React from 'react'
import css from './layout.module.css'

export default props =>
  <div className={css.root}>
    {props.children}
  </div>
