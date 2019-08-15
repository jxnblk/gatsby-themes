import {
  createContext,
  useContext,
} from 'react'

export const Context = createContext({
  colorMode: 'light',
  setColorMode: () => {},
  theme: {},
})

export const useTheme = () => useContext(Context)
