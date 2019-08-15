import React from 'react'
import theme from './theme'
import Layout from './layout'
import { Root } from './root'

export { useTheme } from './context'
export { default as ToggleColorMode } from './toggle-color-mode'

export const wrapRootElement = ({ element, props }) => {
  return (
    <Root theme={theme}>
      {element}
    </Root>
  )
}

const noflash = `
(function() {
  try {
    var mode = localStorage.getItem('theme-css-color-mode');
    if (!mode) return
    document.body.classList.add(mode);
  } catch (e) {}
})();
`

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: noflash
      }}
    />
  ])
}

export { default as Post } from './post'
export { default as Posts } from './posts'
