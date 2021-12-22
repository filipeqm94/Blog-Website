import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { FaRegThumbsUp, FaRegCommentDots } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'

export default function Articles({ articles }) {
  return (
    <section className="container">
      {articles ? (
        articles.length ? (
          articles.map(article => {
            return (
              <div
                className="card mb-3 p-2 bg-dark rounded-3"
                key={article._id}
              >
                <Link to={`/article/${article._id}`} className="articleLink">
                  <h2 className="card-title ms-3">{article.title}</h2>

                  <small className="text-muted ms-3">
                    By: {article.author} -{' '}
                    <Moment format="MM/DD">{article.createdAt}</Moment> (
                    <Moment fromNow>{article.createdAt}</Moment>)
                  </small>

                  <ReactMarkdown className="markdown m-3 p-3 fs-6 border border-secondary rounded">
                    {article.body.length > 283
                      ? `${article.body.slice(0, 280)}...`
                      : article.body}
                  </ReactMarkdown>

                  <div className="ms-4">
                    <small className="d-flex">
                      <p>
                        <FaRegThumbsUp /> {article.likeCount}
                      </p>
                      <p className="ms-3">
                        <FaRegCommentDots /> {article.comments.length}
                      </p>
                    </small>
                  </div>
                </Link>
              </div>
            )
          })
        ) : (
          <div className="text-center mt-5">
            <h3>Looks like there are no articles at the moment!</h3>
            <p>Be the first one to post!</p>
            <Link to={'/submit'} className="btn btn-success mx-3">
              Create Article
            </Link>
          </div>
        )
      ) : (
        <div className="container d-flex justify-content-center">
          <div className="spinner-border text-light m-5" role="status"></div>
        </div>
      )}
    </section>
  )
}
