import React, { useEffect, useState } from 'react'
const axios = require('axios')

export default function Edit({ match }) {
  const [editArticle, setEditArticle] = useState({
    title: '',
    author: '',
    body: ''
  })
  useEffect(() => {
    axios
      .get('http://localhost:4000/api/articles/' + match.params.id)
      .then(res => setEditArticle(res.data))
  }, [match.params.id])

  function handleChange(event) {
    setEditArticle(prevState => ({
      ...prevState,
      [event.target.id]: event.target.value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios
      .patch(
        'http://localhost:4000/api/articles/' + match.params.id,
        editArticle
      )
      .then(() => (window.location.pathname = '/article/' + match.params.id))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            value={editArticle.title}
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <input
            value={editArticle.author}
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
            value={editArticle.body}
            className="form-control"
            id="body"
            rows="5"
            placeholder="Text..."
            required
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-outline-success mt-3">
          Submit
        </button>
      </form>
    </div>
  )
}
