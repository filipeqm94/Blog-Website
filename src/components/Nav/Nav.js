import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

function Nav(props) {
  return (
    <div>
      <Link to={'/submit'}>
        <button className="btn btn-outline-success">Create Article</button>
      </Link>
    </div>
  )
}

export default Nav
