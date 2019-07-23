/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

export default props =>
  <Styled.a
    {...props}
    sx={{
      diplay: 'inline-block',
      color: 'inherit',
      textDecoration: 'none',
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
      flex: 'none',
      px: 3,
      py: 2,
    }}
  />
