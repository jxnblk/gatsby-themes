/** @jsx jsx */
import { jsx, Styled, css } from 'theme-ui'

export default props =>
  <Styled.a
    {...props}
    sx={{
      display: 'inline-block',
      color: 'inherit',
      fontWeight: 'bold',
      textDecoration: 'none',
      px: 3,
      py: 2,
    }}
  />
