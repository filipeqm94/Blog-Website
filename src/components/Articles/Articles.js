import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { FaRegThumbsUp, FaRegCommentDots } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'

import Nav from '../Header/Nav'

export default function Articles({ articles }) {
  return (
    <section className="container">
      {articles ? (
        articles.length ? (
          <>
            <div className="d-flex justify-content-end mb-3">
              <Nav />
            </div>
            {articles.map(article => {
              return (
                <div
                  className="card mb-3 p-2 bg-dark rounded-3"
                  key={article._id}
                >
                  <Link
                    to={`/article/${article._id}`}
                    className="articleLink mt-3"
                  >
                    <h2 className="articleTitle card-title mx-3">
                      {article.title}
                    </h2>

                    <small className="text-muted mx-3">
                      By: {article.author} -{' '}
                      <Moment format="MM/DD">{article.createdAt}</Moment> (
                      <Moment fromNow>{article.createdAt}</Moment>)
                    </small>

                    <ReactMarkdown className="markdown m-3 p-2 border border-secondary rounded">
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
            })}
          </>
        ) : (
          <div className="text-center mt-5">
            <h3>Looks like there are no articles at the moment!</h3>
            <p>Be the first one to post!</p>
            <Nav />
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
