/** @jsx jsx */
import {
  jsx,
  ThemeProvider,
  Styled,
  ColorMode,
} from 'theme-ui'
import theme from './theme'

export default props => {
  return (
    <ThemeProvider theme={theme}>
      <ColorMode />
      <Styled.root>
        {props.children}
      </Styled.root>
    </ThemeProvider>
  )
}
