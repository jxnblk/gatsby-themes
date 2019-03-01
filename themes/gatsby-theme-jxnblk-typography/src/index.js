import React from 'react'
import jxnblk from '@jxnblk/typography'
import { TypographyProvider } from 'typography-system'

export const wrapPageElement = ({ element, props }) =>
  <TypographyProvider theme={jxnblk}>
    <>
      {element}
    </>
  </TypographyProvider>
