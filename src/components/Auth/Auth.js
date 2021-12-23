import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { GoogleLogin } from 'react-google-login'

export default function Auth({ user, setUser }) {
  const [isSignIn, setIsSignIn] = useState(false)

  const history = useHistory()

  function handleSubmit(event) {
    event.preventDefault()
  }

  function handleChange({ target }) {
    console.log(target.id)
  }

  function handleSwitch() {
    setIsSignIn(prevState => !prevState)
  }

  function googleSuccess(res) {
    const profile = {
      profileId: res.profileObj,
      tokenId: res.tokenId
    }

    localStorage.setItem('profile', JSON.stringify({ ...profile }))
    setUser(profile)

    history.push('/')
  }

  function googleFailure() {
    console.log('Google Sign In was unsuccessful. Try again later')
  }

  return (
    <>
      {user ? (
        <>
          <h2>{user.profileId.givenName}</h2>
          <img src={user.profileId.imageUrl} alt={user.profileId.name} />
        </>
      ) : null}

      <form onSubmit={handleSubmit}>
        {isSignIn ? (
          <>
            <input
              type="text"
              id="username"
              placeholder="Username"
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <div>
              <input
                type="text"
                id="firstName"
                placeholder="First Name *"
                onChange={handleChange}
              />
              <input
                type="text"
                id="lastName"
                placeholder="Last Name *"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="username"
                id="username"
                placeholder="Username *"
                onChange={handleChange}
              />
              <br />
              <input
                type="password"
                id="password"
                placeholder="Password *"
                onChange={handleChange}
              />
              <br />
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password *"
                onChange={handleChange}
              />
            </div>
          </>
        )}
        <br />
        <button type="submit">Sign {isSignIn ? 'In' : 'Up'}</button>
        <br />
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          render={renderProps => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Sign In with Google
            </button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
        />
        <br />
        <button onClick={handleSwitch}>
          {isSignIn
            ? "Don't have an account? Sign Up!"
            : 'Already have an account? Sign In!'}
        </button>
      </form>
    </>
  )
}
