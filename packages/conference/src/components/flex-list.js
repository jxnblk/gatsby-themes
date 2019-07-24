/** @jsx jsx */
import { jsx } from 'theme-ui'
import List from './list'

export default props =>
  <List
    {...props}
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
    }}
  />
