import styled from '@emotion/styled'

export const Container = styled('div')({
  minWidth: 0,
  width: '100%',
  flex: '1 1 auto',
  marginLeft: 'auto',
  marginRight: 'auto',
}, ({ maxWidth, padding }) => ({
  maxWidth,
  paddingLeft: padding,
  paddingRight: padding,
}))

Container.defaultProps = {
  padding: 32,
}

export default Container
