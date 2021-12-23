import React from 'react'
import { Link } from 'react-router-dom'

function Header({ user }) {
  return (
    <header className="border-bottom border-dark d-flex justify-content-between align-items-center pb-1">
      <Link to={'/'} className="logo articleLink fs-1">
        articlr
      </Link>
      {user ? (
        <div className="d-flex align-items-center">
          <h6 className="me-3 mt-2">{user.profileId.givenName}</h6>
          <img
            className="border border-light"
            src={user.profileId.imageUrl}
            alt={user.profileId.name}
            style={{
              width: '2.5rem',
              padding: 0,
              borderRadius: '100%'
            }}
          />
        </div>
      ) : (
        <Link to="/auth" className="btn btn-primary py-1">
          Log In
        </Link>
      )}
    </header>
  )
}

export default Header
