import React from 'react'
import { useTheme } from './context'
import get from 'lodash.get'

export default props => {
  const { colorMode, setColorMode, theme } = useTheme()
  const modes = [
    'light',
    ...Object.keys(get(theme, 'colors.modes', {}))
  ]
  const toggleMode = e => {
    const i = modes.indexOf(colorMode)
    const n = (i + 1) % modes.length
    setColorMode(modes[n])
  }

  return (
    <button
      children={colorMode}
      {...props}
      onClick={toggleMode}
    />
  )
}
