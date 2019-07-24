/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

export default props =>
  <Styled.ul
    {...props}
    sx={{
      listStyle: 'none',
      p: 0,
    }}
  />
