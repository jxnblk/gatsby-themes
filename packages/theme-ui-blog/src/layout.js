import React from 'react'
import Head from './head'

export default props =>
  <>
    <Head {...props} />
    {props.children}
  </>
