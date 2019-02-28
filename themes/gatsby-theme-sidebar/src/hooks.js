import { useState, useEffect } from 'react'
import config from './_config'

export const useMedia = query => {
  const [ matches, setMatches ] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia(query)

    const listener = () => {
      setMatches(mq.matches)
    }

    mq.addListener(listener)
    setMatches(mq.matches)
    return () => {
      mq.removeListener(listener)
    }
  }, [ query ])

  return matches
}

export const useBreakpoint = () => {
  return useMedia(`(max-width:${config.breakpoint})`)
}

