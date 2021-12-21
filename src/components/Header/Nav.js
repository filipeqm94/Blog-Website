import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <Link to={'/submit'} className="btn btn-success py-1">
        Create Article
      </Link>
    </div>
  )
}

export default Nav
