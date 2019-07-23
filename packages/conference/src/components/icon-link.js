/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

export default props =>
  <Styled.a
    {...props}
    sx={{
      display: 'inline-block',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      '&:hover': {
        color: 'primary',
      },
      '& > svg': {
        display: 'inline-block',
        verticalAlign: 'middle',
      }
    }}
  />
