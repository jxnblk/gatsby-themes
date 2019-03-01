import merge from 'lodash.merge'
import userTheme from './theme'

export const colors = {
  black: '#000',
  white: '#fff',
  blue: '#33e',
  purple: '#c0c',
}

export default merge({
  colors,
}, userTheme)
