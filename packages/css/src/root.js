import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Global } from '@emotion/core'
import pluralize from 'pluralize'
import get from 'lodash.get'

export const Context = createContext({
  colorMode: 'light',
  setColorMode: () => {},
  theme: {},
})

export const useTheme = () => useContext(Context)

export const ToggleColorMode = props => {
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

const STORAGE_KEY = 'theme-css-color-mode'
const storage = {
  get: fallback => window.localStorage.getItem(STORAGE_KEY) || fallback,
  set: value => window.localStorage.setItem(STORAGE_KEY, value)
}

export const useColorState = (initialMode = 'light') => {
  const [ mode, setMode ] = useState(initialMode)

  useEffect(() => {
    const stored = storage.get()
    if (!stored || stored === mode) return
    setMode(stored)
  }, [])

  useEffect(() => {
    if (!mode) return
    storage.set(mode)
    document.body.classList.add(mode)
    return () => {
      document.body.classList.remove(mode)
    }
  }, [mode])

  return [ mode, setMode ]
}

const keyToVar = (...keys) => `--${keys.join('-')}`
const toPixel = val => typeof val === 'number' ? `${val}px` : val

const createColorModes = (modes) => {
  let styles = {}
  for (let key in modes) {
    const mode = modes[key]
    styles[`&.${key}`] = objectToVars('colors', mode)
  }
  return styles
}

const shouldConvertPixels = property => {
  return ![
    'lineHeight',
    'fontWeight',
  ].includes(property)
}

const objectToVars = (name, obj) => {
  let vars = {}
  const singular = pluralize.singular(name)
  for (let key in obj) {
    const ref = keyToVar(singular, key)
    const value = obj[key]
    if (name === 'colors' && key === 'modes') {
      Object.assign(vars, createColorModes(value))
    } else if (typeof value === 'object') {
      Object.assign(vars, objectToVars([singular, key].join('-'), value))
    } else if (shouldConvertPixels(singular)) {
      vars[ref] = toPixel(value)
    } else {
      vars[ref] = value
    }
  }
  return vars
}

const themeToCustomProperties = theme => {
  let styles = {
    margin: 0,
    color: 'var(--color-text)',
    backgroundColor: 'var(--color-background)',
  }
  for (let key in theme) {
    const value = theme[key]
    Object.assign(styles, objectToVars(key, value))
  }
  return styles
}

export const Root = ({ theme, children }) => {
  const [ colorMode, setColorMode ] = useColorState('light')

  const styles = themeToCustomProperties(theme)
  const context = {
    colorMode,
    setColorMode,
    theme,
  }

  return (
    <Context.Provider value={context}>
      <Global
        styles={{
          body: styles
        }}
      />
      {children}
    </Context.Provider>
  )
}
