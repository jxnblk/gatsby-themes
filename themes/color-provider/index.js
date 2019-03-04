import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import merge from 'lodash.merge'
import get from 'lodash.get'

export const defaultColors = {
  text: '#000',
  background: '#fff',
  primary: '#07c',
  secondary: '#47a',
  // backgrounds/non-text
  highlight: '#ff9500',
  // borders/backgrounds
  muted: '#d6dee3',
}

// todo
// - [ ] map color abstractions to elements
// - [ ] can the outer component use the theme context here??

export const ColorProvider = ({
  colors,
  className,
  css,
  children,
  ...props
}) => {
  const theme = {
    colors: merge(defaultColors, colors),
  }

  return (
    <ThemeProvider
      {...props}
      theme={theme}>
      <div
        className={className}
        css={theme => console.log(theme) || ({
          ...(typeof css === 'function' ? css(theme) : css),
          color: get(theme, 'colors.text'),
          backgroundColor: get(theme, 'colors.background'),
          '& a': {
            color: get(theme, 'colors.link') || get(theme, 'colors.primary'),
          },
          // ???
        })}>
        {children}
      </div>
    </ThemeProvider>
  )
}

export default ColorProvider
