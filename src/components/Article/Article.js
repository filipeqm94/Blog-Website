import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import ReactMarkdown from 'react-markdown'

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

  return '_id' in article ? (
    <div className="container">
      <div className="d-flex mb-3 my-2">
        <Link className="me-auto" to="/">
          <button className=" btn btn-warning py-1">Back</button>
        </Link>
        <Delete id={article._id} />
        <Link className="ms-3" to={`/article/${article._id}/edit`}>
          <button className="btn btn-primary  py-1">Edit</button>
        </Link>
      </div>
      <br />
      <div className="border border-secondary mb-3 rounded p-3">
        <small>{article.author} </small>
        <h1>{article.title}</h1>
        <small className="text-muted">
          <Moment fromNow>{article.createdAt}</Moment>
        </small>
        <ReactMarkdown className="mt-3 p-3 bg-dark rounded">
          {article.body}
        </ReactMarkdown>
      </div>
      <Like article={article} setArticle={setArticle} />
      <Comments article={article} setArticle={setArticle} />
    </div>
  ) : (
    <div className="container d-flex justify-content-center">
      <div className="spinner-border text-light m-5" role="status"></div>
    </div>
  )
}
