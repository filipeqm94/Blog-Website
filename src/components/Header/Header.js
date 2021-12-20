import React from 'react'
import { Link } from 'react-router-dom'
// import App from '../../App'
// import Nav from '../Nav/Nav'
import './Header.scss'
import logo from '../The_Rebasers_logo/cover2.png'

function Header() {
  return (
    <header className="container d-flex justify-content-between align-items-center">
      <img
        src={logo}
        alt="The Rebasers"
        className="col-4 pointer"
        onClick={() => (window.location.pathname = '/')}
      />
      <Link to={'/submit'} className="btn btn-outline-success mx-3">
        Create Article
      </Link>
    </header>
  )
}

export default Header
