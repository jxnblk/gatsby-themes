import React, { useState } from 'react'
import styled from '@emotion/styled'
import {
  space,
  width,
  maxWidth,
  color
} from 'styled-system'
import { themes } from './themes'

export const Box = styled.div(
  space,
  width,
  color
)

export const Container = styled(Box)(
  maxWidth
)

Container.defaultProps = {
  maxWidth: 1024,
  mx: 'auto',
}

export const Layout = props => {
  // nope
  // const [ name, setTheme ] = useState('gates')
  // const theme = themes[name]

  return (
    <>
      {/*
      <Box>
        <select
          value={name}
          onChange={e => {
            setTheme(e.target.value)
          }}>
          {Object.keys(themes).map(key => (
            <option
              key={key}
              value={key}
              label={themes[key].title}
            />
          ))}
        </select>
      </Box>
      */}
      <Container
        px={4}
        py={5}>
        {props.children}
      </Container>
    </>
  )
}
