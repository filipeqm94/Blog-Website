import axios from 'axios'
import React, { useState } from 'react'
import Moment from 'react-moment'

const initialState = {
  body: '',
  likeCount: 0
}

export default function Comments({ article, setArticle }) {
  const [comment, setComment] = useState({ body: '', likeCount: 0 })

  const handleSubmit = event => {
    event.preventDefault()

    axios
      .post(process.env.REACT_APP_API_URL + 'comments', comment)
      .then(({ data }) => {
        axios
          .patch(
            `${process.env.REACT_APP_API_URL}articles/${article._id}/comments`,
            data
          )
          .then(
            setArticle(prevState => ({
              ...prevState,
              comments: [...prevState.comments, data]
            }))
          )
      })
      .then(() => setComment(initialState))
  }

  const handleChange = ({ target }) => {
    setComment(prevState => ({
      ...prevState,
      body: target.value
    }))
  }

  return (
    <div>
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="comment">Comment: </label>
          <textarea
            id="comment"
            className="form-control bg-dark text-light border-secondary"
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
      {article.comments.length ? (
        article.comments.map((comment, index) => {
          return (
            <div className="bg-dark rounded p-2 mb-2" key={index}>
              {}
              <p>{comment.body}</p>
              <small>
                <Moment fromNow className="text-muted">
                  {article.createdAt}
                </Moment>
              </small>
            </div>
          )
        })
      ) : (
        <h4 className="text-muted">No comments at the moment</h4>
      )}
    </div>
  )
}
