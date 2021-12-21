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
    <div>
      <Link to="/">Back</Link>
      <Delete id={article._id} />
      <Link to={`/article/${article._id}/edit`}>Edit</Link>
      <br />
      <small>{article.author} </small>
      <h1>{article.title}</h1>
      <div className="text-muted">
        <Moment fromNow>{article.createdAt}</Moment>
      </div>
      <p className="mt-3 p-3 bg-dark rounded">{article.body}</p>
      <Like article={article} setArticle={setArticle} />
      <Comments article={article} setArticle={setArticle} />
    </div>
  )
}
