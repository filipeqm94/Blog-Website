import React from 'react'
import { Link } from 'react-router-dom'

import './Articles.scss'
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri'

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
            <div className="d-grid gap-2 d-md-block m-1">
              <button className="btn btn-success" type="button">
                <RiThumbUpFill /> {article.likes.positive}
              </button>
              <button className="btn btn-danger" type="button">
                <RiThumbDownFill /> {article.likes.negative}
              </button>
            </div>
          </div>
        )
      })}
    </section>
  )
}
