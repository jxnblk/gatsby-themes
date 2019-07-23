/** @jsx jsx */
import { jsx } from 'theme-ui'

export default ({
  src,
  ratio = 1,
  ...props
}) =>
  <div
    {...props}
    sx={{
      width: '100%',
      height: 0,
      pb: (ratio * 100) + '%',
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  />
