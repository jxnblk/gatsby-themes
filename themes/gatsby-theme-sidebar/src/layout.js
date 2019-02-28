import React, { useContext } from 'react'
import { Global } from '@emotion/core'
import config from './_config'

export const Context = React.createContext({})
export const useLayout = () => useContext(Context)

export const Layout = props => {
  const context = {
    ...config,
    ...props,
    hasHeader: false,
    headerHeight: 64,
  }
  const children = React.Children.toArray(props.children)

  children.forEach(child => {
    if (child.type.isHeader) {
      context.hasHeader = true
      const { height } = child.props
      if (height) context.headerHeight = height
    }
  })

  return (
    <>
      <Global
        styles={{
          '*': {
            boxSizing: 'border-box',
          },
          body: {
            margin: 0,
            fontFamily: 'system-ui, sans-serif',
            lineHeight: 1.5,
          }
        }}
      />
      <Context.Provider value={context}>
        <div
          {...props}
          css={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}>
          {children}
        </div>
      </Context.Provider>
    </>
  )
}

export default Layout
