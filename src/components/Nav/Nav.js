import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

function Nav(props) {
  return (
    <div>
      <Link to={'/submit'}>
        <button className="create">Create Article</button>
      </Link>
    </div>
  )
}

export default Nav
