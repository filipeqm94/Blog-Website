import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

import Delete from '../Delete/Delete'
import Like from '../Like/Like'
import Comments from '../Comments/Comments'

export default function Article({ match }) {
  const [article, setArticle] = useState({})

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + 'articles/' + match.params.id)
      .then(res => setArticle(res.data))
  }, [match.params.id])

  return (
    <div className="container">
      <div className="d-flex mb-3">
        <Link className="me-auto " to="/">
          <button className=" btn btn-warning">Back</button>
        </Link>
        <Delete id={article._id} />
        <Link className="ms-3" to={`/article/${article._id}/edit`}>
          <button className="btn btn-primary ">Edit</button>
        </Link>
      </div>
      <br />
      <small>{article.author} </small>
      <h1>{article.title}</h1>
      <small className="text-muted">
        <Moment fromNow>{article.createdAt}</Moment>
      </small>
      <p className="mt-3 p-3 bg-dark rounded">{article.body}</p>
      <Like article={article} setArticle={setArticle} />
      <Comments article={article} setArticle={setArticle} />
    </div>
  )
}
