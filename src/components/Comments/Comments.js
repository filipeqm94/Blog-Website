import axios from 'axios'
import React, { useState } from 'react'

export default function Comments({ article, setArticle }) {
  const [comment, setComment] = useState({ body: '', likeCount: 0 })

  const handleSubmit = event => {
    event.preventDefault()

    axios
      .post('http://localhost:4000/api/comments', comment)
      .then(({ data }) => {
        console.log(data)
        axios
          .patch(
            `http://localhost:4000/api/articles/${article._id}/comments`,
            data
          )
          .then(
            setArticle(prevState => ({
              ...prevState,
              comments: [...prevState.comments, data]
            }))
          )
      })
  }

  const handleChange = ({ target }) => {
    setComment(prevState => ({
      ...prevState,
      body: target.value
    }))
  }

  console.log(article.title)

  return (
    <div>
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="comment">Comment: </label>
          <textarea
            id="comment"
            className="form-control"
            placeholder="Enter your comment here"
            required
            value={comment.body}
            onChange={handleChange}
          ></textarea>
        </div>
        <br />
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
      {'comments' in article
        ? article.comments.map((comment, index) => {
            return (
              <div key={index}>
                <p>{comment.body}</p>
              </div>
            )
          })
        : null}
    </div>
  )
}
