import React from 'react'
import { Route, Link } from 'react-router-dom'
import Nav from './Nav'

function Header() {
  return (
    <header className="border-bottom border-dark d-flex justify-content-between align-items-center mb-3 pb-1">
      <Link to={'/'} className="articleLink fs-1">
        The Rebasers
      </Link>
      <Route exact path="/" component={Nav} />
    </header>
  )
}

export default Header
