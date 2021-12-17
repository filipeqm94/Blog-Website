import React from 'react'
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri'

import './Articles.scss'

export default function Articles({ articles }) {
  return (
    <section className="container">
      {articles.map(article => {
        return (
          <div className="card mb-3 p-1 bg-dark rounded-3" key={article._id}>
            <h2 className="card-title">{article.title}</h2>
            <small>Author: {article.author}</small>
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
