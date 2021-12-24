import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function Header({ user, setUser }) {
  const history = useHistory()

  function handleLogout() {
    localStorage.clear()

    setUser(null)

    history.push('/')
  }

  return (
    <header className="border-bottom border-dark d-flex justify-content-between align-items-center py-2">
      <Link to={'/'} className="logo articleLink mt-2 fs-1">
        articlr
      </Link>
      {user ? (
        <div className="d-flex align-items-center">
          <h6 className="me-3">{user.profileObj.name}</h6>
          {user.profileObj.imageUrl ? (
            <img
              className="border border-light"
              src={user.profileObj.imageUrl}
              alt={user.profileObj.name}
              style={{
                width: '30px',
                padding: 0,
                borderRadius: '100%'
              }}
            />
          ) : (
            <h2
              className="bg-dark"
              style={{
                padding: '0 10px',
                borderRadius: '100%'
              }}
            >
              {user.profileObj.name.charAt(0).toUpperCase()}
            </h2>
          )}

          <button className="btn btn-danger ms-3 py-1" onClick={handleLogout}>
            Log Out
          </button>
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
