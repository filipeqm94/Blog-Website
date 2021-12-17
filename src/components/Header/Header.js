import React from 'react'
import Nav from '../Nav/Nav'
import './Header.scss'

function Header(props) {
  return (
    <header className="container lg_hd">
      <div className="row ">
        <div className="col">
          <h1>Logo goes here</h1>
          <Nav />
        </div>
      </div>
    </header>
  )
}

export default Header
