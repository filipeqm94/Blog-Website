import React from 'react'
import { Route, Link } from 'react-router-dom'
import Nav from './Nav'

function Header() {
  return (
    <header className="border-bottom border-dark d-flex justify-content-between align-items-center pb-1">
      <Link to={'/'} className="logo articleLink fs-1">
        articlr
      </Link>
      <Route exact path="/" component={Nav} />
    </header>
  )
}

export default Header
