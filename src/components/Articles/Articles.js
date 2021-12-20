import React from 'react'
import { Link } from 'react-router-dom'

import './Articles.scss'

export default function Articles({ articles }) {
  return (
    <section className="container">
      {articles.map(article => {
        return (
          <div className="card mb-3 p-1 bg-dark rounded-3" key={article._id}>
            <Link to={`/article/${article._id}`} className="articleLink">
              <h2 className="card-title">{article.title}</h2>
              <small className="text-muted">By: {article.author}</small>
              <p>
                {article.body.length > 283
                  ? `${article.body.slice(0, 280)}...`
                  : article.body}
              </p>
            </Link>
            <p>
              <small>
                {article.likeCount} Likes | {article.comments.length} Comments
              </small>
            </p>
          </div>
        )
      })}
    </section>
  )
}
