/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

export default props =>
  <Styled.a
    {...props}
    css={{
      display: 'inline-block',
      color: 'inherit',
      fontWeight: 'bold',
      textDecoration: 'none',
      px: 3,
      py: 2,
    }}
  />
