import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { FaRegThumbsUp, FaRegCommentDots } from 'react-icons/fa'

import './Articles.scss'

export default function Articles({ articles }) {
  return (
    <section className="container">
      {articles.map(article => {
        return (
          <div className="card mb-3 p-2 bg-dark rounded-3" key={article._id}>
            <Link to={`/article/${article._id}`} className="articleLink">
              <div>
                <h2 className="card-title">{article.title}</h2>
              </div>

              <small className="text-muted">By: {article.author}</small>
              <p>
                {article.body.length > 283
                  ? `${article.body.slice(0, 280)}...`
                  : article.body}
              </p>
              <div className="d-flex">
                <Moment format="YYYY/MM/DD" className="text-muted">
                  {article.createdAt}
                </Moment>
                <small className="d-flex ms-4">
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
    </section>
  )
}
