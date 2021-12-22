import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

const axios = require('axios')

export default function Edit({ match, setArticles }) {
  const [editArticle, setEditArticle] = useState({
    title: '',
    author: '',
    body: ''
  })
  const [redirect, setRedirect] = useState(null)

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + 'articles/' + match.params.id)
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
        process.env.REACT_APP_API_URL + 'articles/' + match.params.id,
        editArticle
      )
      .then(newArticle => {
        axios
          .get(process.env.REACT_APP_API_URL + 'articles')
          .then(res => setArticles(res.data))
          .then(() => setRedirect(newArticle.data._id))
      })
  }

  return (
    <div>
      {redirect ? <Redirect to={'/article/' + redirect} /> : null}
      <Link to={'/'}>
        <button className="btn btn-warning mb-3">Back</button>
      </Link>
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
        <button type="submit" className="btn btn-success mt-3">
          Submit
        </button>
      </form>
    </div>
  )
}
