import React from 'react'
import Header from './header.mdx'
import Footer from './footer.mdx'
import css from './styles.module.css'

export default props =>
  <div className={css.root}>
    <header className={css.header}>
      <Header />
    </header>
    <main className={css.container}>
      {props.children}
    </main>
    <footer className={css.footer}>
      <Footer />
    </footer>
  </div>
