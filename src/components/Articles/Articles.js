import React from 'react'
import './Articles.css'

export default function Articles({ articles }) {
  return (
    <section>
      {articles.map(article => {
        return (
          <article>
            <h2>{article.title}</h2>
            <small>Author: {article.author}</small>
            <p className="article-text">{article.body}</p>
            <small className="likes-count">
              Likes:{article.likes.positive}
            </small>
            <small className="dislikes-count">
              Dislikes:{article.likes.negative}
            </small>
          </article>
        )
      })}
    </section>
  )
}
