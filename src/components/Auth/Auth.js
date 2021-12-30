import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import axios from 'axios'

import { GoogleLogin } from 'react-google-login'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export default function Auth({ user, setUser }) {
  const [isSignIn, setIsSignIn] = useState(true)
  const [formData, setFormData] = useState(initialState)
  const [error, setError] = useState(null)

  const history = useHistory()

  function handleSubmit(event) {
    event.preventDefault()

    if (isSignIn) {
      axios
        .post(process.env.REACT_APP_API_URL + '/user/signin', {
          email: formData.email,
          password: formData.password
        })
        .then(res => {
          localStorage.setItem('profile', JSON.stringify(res.data))
          setUser(res.data)
          setError(null)

          history.push('/')
        })
        .catch(res => setError(res.response.data))
    } else {
      axios
        .post(process.env.REACT_APP_API_URL + '/user/signup', formData)
        .then(res => {
          console.log(res.data)
          localStorage.setItem('profile', JSON.stringify(res.data))
          setUser(res.data)
          setError(null)

          history.push('/')
        })
        .catch(res => setError(res.response.data))
    }
  }

  function handleChange({ target }) {
    setFormData(prevFormData => ({
      ...prevFormData,
      [target.name]: target.value
    }))
  }

  function handleSwitch() {
    setIsSignIn(prevState => !prevState)
  }

  function googleSuccess(res) {
    const profile = {
      ...res.profileObj,
      token: res.tokenId
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
      <form onSubmit={handleSubmit}>
        <div
          className={`d-flex justify-content-center align-items-center ${
            error ? 'visible' : 'invisible'
          }`}
        >
          <div className="alert alert-danger text-center p-2" role="alert">
            {error ? error.message : 'Placeholder'}
          </div>
        </div>

        {isSignIn ? (
          <>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                onChange={handleChange}
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password *"
                required
                onChange={handleChange}
              />
              <br />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password *"
                required
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
