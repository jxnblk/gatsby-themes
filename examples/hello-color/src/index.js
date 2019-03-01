import React, { useState } from 'react'
import { ThemeProvider } from 'emotion-theming'
import bikeshed from '@jxnblk/bikeshed'
import './styles.css'

const Root = props => {
  const [ color, setColor ] = useState('#a8371c')

  return (
    <ThemeProvider theme={{ color }}>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          padding: 32,
        }}>
        <div css={{ margin: 'auto' }} />
        <label htmlFor='color'>
          Base Color
        </label>
        <input
          id='color'
          name='color'
          value={color}
          onChange={e => {
            setColor(e.target.value)
          }}
          css={{
            fontFamily: 'inherit',
            fontSize: 'inherit',
            padding: 8,
            marginLeft: 8,
            appearance: 'none',
            color: 'inherit',
            backgroundColor: 'rgba(0, 0, 0, .125)',
            border: 'none',
            borderRadius: 6,
          }}
        />
      </div>
      <div
        onClick={e => {
          const next = bikeshed()
          setColor(next)
        }}
        css={{
          userSelect: 'none',
          padding: 32,
        }}>
        {props.children}
      </div>
    </ThemeProvider>
  )
}

export const wrapPageElement = ({ element, props }) =>
  <Root {...props}>
    {element}
  </Root>
