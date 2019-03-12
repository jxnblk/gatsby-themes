import styled from '@emotion/styled'
import get from 'lodash.get'

// color abstraction
const ColorScheme = styled('div')(({ theme }) => ({
  color: get(theme.colors, 'text'),
  backgroundColor: get(theme.colors, 'background'),
  a: {
    color: get(theme.colors, 'primary'),
    '&:hover': {
      color: get(theme.colors, 'secondary'),
    }
  },
  code: {
    color: get(theme.colors, 'secondary'),
    backgroundColor: 'tomato', // get(theme.colors, 'secondary'),
  },
  pre: {
    backgroundColor: get(theme.colors, 'muted'),
  }
}))

export default ColorScheme
