import React, { useState } from 'react'
import { ThemeProvider } from 'emotion-theming'
import './styles.css'

const Root = props => {
  const [ color, setColor ] = useState('#a8371c')

  return (
    <ThemeProvider theme={{ color }}>
      <div
        css={{
          padding: 32,
          color: 'var(--background)',
          backgroundColor: 'var(--color)',
        }}>
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
        />
      </div>
      <div
        css={{
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
