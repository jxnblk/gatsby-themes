import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import hello from 'hello-color'

const BodyStyles = props =>
  <Global
    {...props}
    styles={theme => ({
      body: {
        margin: 0,
        color: theme.color,
        backgroundColor: theme.backgroundColor,
        transition: 'color, background-color .1s ease-out',
        '--color': theme.color,
        '--background': theme.backgroundColor,
      }
    })}
  />

const defaultcolor = 'tomato'

export const wrapPageElement = ({ element, props }) => {
  const res = hello(defaultcolor)
  const theme = (base = {}) => ({
    color: defaultcolor,
    backgroundColor: hello(defaultcolor).color,
    ...(base.color ? {
      color: base.color,
      backgroundColor: (hello(base.color || defaultcolor) || {}).color,
    } : {})
  })

  return (
    <ThemeProvider theme={theme}>
      <>
        <BodyStyles />
        {element}
      </>
    </ThemeProvider>
  )
}

