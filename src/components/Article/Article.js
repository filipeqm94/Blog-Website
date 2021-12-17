import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Article.scss'

export default function Article({ match }) {
  const [article, setArticle] = useState({})

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/articles' + match.url)
      .then(res => setArticle(res.data))
  }, [])

  return (
    <div>
      <Link to="/">Back</Link>
      <br />
      <small>{article.author} </small>
      <h1>{article.title}</h1>
      <div className="text-muted">
        <small>{Date(article.createdAt)}</small>
      </div>
      <p className="mt-3 p-3 bg-dark rounded">{article.body}</p>
      <label className="btn btn-outline-success">
        Like
        <input type="radio" name="likeArticle" value="positive" />
      </label>
      <label className="btn btn-outline-danger">
        Dislike
        <input type="radio" name="likeArticle" value="negative" />
      </label>
    </div>
  )
}
