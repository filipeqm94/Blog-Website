import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SubmitArticle() {
  const axios = require('axios')
  const initialState = {
    author: '',
    title: '',
    body: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = ev => {
    ev.preventDefault()
    setFormState({ ...formState, [ev.target.id]: ev.target.value })
  }

  const handleSubmit = ev => {
    ev.preventDefault()
    axios
      .post(process.env.REACT_APP_API_URL + 'articles', formState)
      .then(res => {
        setFormState(initialState)
        window.location.pathname = `/article/${res.data._id}`
      })
  }

  return (
    <div>
      <Link to={'/'}>
        <button className="btn btn-warning mb-3">Back</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            required
            className="form-control"
            id="author"
            placeholder="Author"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <textarea
            className="form-control"
            id="body"
            rows="5"
            placeholder="Text..."
            required
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success mt-3">
          Submit
        </button>
      </form>
    </div>
  )
}

export default SubmitArticle
