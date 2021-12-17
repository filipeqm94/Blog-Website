import React from 'react'
import { Link } from 'react-router-dom'
// import App from '../../App'
// import Nav from '../Nav/Nav'
import './Header.scss'
import logo from '../The_Rebasers_logo/cover2.png'

function Header(props) {
  return (
    <header className="container lg_hd">
      <div className="row">
        <img src={logo} alt="HeaderImg" className="col-md-4" />
        <div className="col align-self-end md-4 ">
          <Link to={'/submit'}>
            <button className="create">Create Article</button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
