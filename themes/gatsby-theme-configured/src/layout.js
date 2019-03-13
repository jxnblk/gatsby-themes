import React from 'react'

export default props =>
  <div
    {...props}
    css={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  />
