import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import ReactMarkdown from 'react-markdown'

import Delete from '../Delete/Delete'
import Like from '../Like/Like'
import Comments from '../Comments/Comments'

export default function Article({ match, dbURL }) {
  const [article, setArticle] = useState({})

  useEffect(() => {
    dbURL.get('/articles/' + match.params.id).then(res => setArticle(res.data))
  }, [match.params.id, dbURL])

  const isLoggedIn = localStorage.getItem('profile') ? true : false

  return '_id' in article ? (
    <div className="mx-5 article-container">
      {isLoggedIn ? (
        <div className="container d-flex mb-3">
          <Link className="me-auto" to="/">
            <button className=" btn btn-warning py-1">Back</button>
          </Link>
          <Delete id={article._id} dbURL={dbURL} />
          <Link className="ms-3" to={`/article/${article._id}/edit`}>
            <button className="btn btn-primary  py-1">Edit</button>
          </Link>
        </div>
      ) : (
        <Link className="me-auto" to="/">
          <button className=" btn btn-warning py-1 mb-3">Back</button>
        </Link>
      )}
      <div className="border border-secondary mb-3 rounded p-3 bg-dark">
        <small className="articleBody">{article.author} </small>
        <h1 className="articleTitle">{article.title}</h1>
        <small className="text-muted">
          <Moment fromNow>{article.createdAt}</Moment>
        </small>
        <ReactMarkdown className="articleBody mt-3 p-3 bg-dark rounded border border-secondary">
          {article.body}
        </ReactMarkdown>
        {isLoggedIn ? (
          <Like
            target={article}
            setArticle={setArticle}
            path={'/articles'}
            dbURL={dbURL}
          />
        ) : (
          <h6 className="my-3">
            {article.likeCount}{' '}
            {article.likeCount === 1 || article.likeCount === -1
              ? 'Like'
              : 'Likes'}
          </h6>
        )}
      </div>
      <Comments
        article={article}
        setArticle={setArticle}
        dbURL={dbURL}
        isLoggedIn={isLoggedIn}
      />
    </div>
  ) : (
    <div className="container d-flex justify-content-center">
      <div className="spinner-border text-light m-5" role="status"></div>
    </div>
  )
}
