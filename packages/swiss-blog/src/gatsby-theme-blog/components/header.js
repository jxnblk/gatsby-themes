/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import { Link } from 'gatsby'

const modes = [
  'light',
  'dark',
]

export default props => {
  const [ mode, setMode ] = useColorMode()
  const toggleMode = e => {
    const i = modes.indexOf(mode)
    const n = (i + 1) % modes.length
    setMode(modes[n])
  }

  return (
    <header
      sx={{
        maxWidth: 'container',
        mx: 'auto',
        display: 'flex',
        alignItems: 'center',
        px: 3,
        py: 3,
      }}>
      <div
        sx={{
          variant: 'type.heading',
        }}>
        <Link to='/'
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            ':hover,:focus': {
              color: 'primary',
            }
          }}>
          gatsby-theme-swiss
        </Link>
      </div>
      <div sx={{ mx: 'auto' }} />
      <button
        onClick={toggleMode}
        sx={{
          variant: 'type.caps',
          fontSize: 0,
          fontWeight: 'bold',
          p: 2,
          border: 0,
          borderRadius: 2,
          color: 'inherit',
          bg: 'muted',
        }}>
        {mode}
      </button>
    </header>
  )
}
