import React from 'react'

export default ({
  data,
}) =>
  <pre children={JSON.stringify(data, null, 2)} />
