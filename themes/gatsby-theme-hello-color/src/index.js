import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import hello from 'hello-color'

const BodyStyles = ({
  color,
  backgroundColor,
  ...props
}) =>
  <Global
    {...props}
    styles={theme => ({
      body: {
        color: theme.color,
        backgroundColor: theme.backgroundColor,
        transition: 'color, background-color .5s ease-out',
      }
    })}
  />

export const wrapPageElement = ({ element, props }) => {
  const theme = {
    color: 'tomato',
    backgroundColor: '#333',
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        <BodyStyles />
        {element}
      </>
    </ThemeProvider>
  )
}

