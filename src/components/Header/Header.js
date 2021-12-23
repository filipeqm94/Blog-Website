import React from 'react'
import { Link } from 'react-router-dom'

function Header({ user }) {
  return (
<<<<<<< HEAD
    <header className="border-bottom border-dark d-flex justify-content-between align-items-center pb-1">
      <Link to={'/'} className="logo articleLink fs-1">
        articlr
=======
    <header className="border-bottom border-dark d-flex justify-content-between align-items-center mb-3 mx-3 pb-1">
      <Link to={'/'} className="articleLink fs-1">
        The Rebasers
>>>>>>> eb11b6e (conditional render login or user info according if there is a logged in user or not)
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
