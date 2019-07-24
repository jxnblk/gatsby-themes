import merge from 'lodash.merge'
import config from './config'

export default merge({
  breakpoint: '40em',
  padding: 32,
  headerHeight: 64,
  headerFixed: true,
}, config)
