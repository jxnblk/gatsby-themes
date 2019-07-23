/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Global } from '@emotion/core'
import Header from './header.mdx'
import Footer from './footer.mdx'

const Container = props =>
  <div
    {...props}
    sx={{
      variant: 'layout.container',
    }}
  />

export const Layout = props =>
  <div
    sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      variant: 'styles.root',
    }}>
    <Global
      styles={{
        '*': { boxSizing: 'border-box' },
        body: { margin: 0 }
      }}
    />
    <header
      sx={{
        display: 'flex',
        alignItems: 'center',
        color: 'background',
        bg: 'text',
        variant: 'layout.header',
      }}>
      <Container>
        <Header />
      </Container>
    </header>
    <main
      sx={{
        flex: '1 1 auto',
        variant: 'layout.main',
      }}>
      <Container>
        {props.children}
      </Container>
    </main>
    <footer
      sx={{
        display: 'flex',
        alignItems: 'center',
        color: 'background',
        bg: 'text',
        variant: 'layout.footer',
      }}>
      <Container>
        <Footer />
      </Container>
    </footer>
  </div>
