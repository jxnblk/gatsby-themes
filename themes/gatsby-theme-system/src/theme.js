import modern from '@styled-system/typography/modern'
import merge from 'lodash.merge'

const colors = {
  text: '#000',
  background: '#fff',
  primary: '#07c',
  secondary: '#047',
  muted: '#f0f6f9',
}

const fonts = {
  body: 'system-ui, sans-serif',
  monospace: 'Menlo, monospace',
}

export const theme = userTheme => merge({
  fonts,
  colors,
  typography: modern,
}, userTheme)

export default theme
