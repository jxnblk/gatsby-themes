import React from 'react'

export default ({
  children,
  ...props
}) =>
  <div>
    {children}
    <pre
      children={JSON.stringify(props, null, 2)}
    />
  </div>
