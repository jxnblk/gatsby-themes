/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

export const Layout = props =>
  <Styled.root
    sx={{
      maxWidth: 'container',
      mx: 'auto',
    }}>
    {props.children}
  </Styled.root>
