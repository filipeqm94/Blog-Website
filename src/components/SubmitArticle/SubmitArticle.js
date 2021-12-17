import React from 'react'
import './SubmitArticle.scss'

import { Link } from 'react-router-dom'

function SubmitArticle(props) {
  return (
    <div>
      <Link to={'/'}>
        <button className="btn btn-outline-warning mb-3">Back</button>
      </Link>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
          />
        </div>

        <div className="form-group mt-3">
          <input
            type="text"
            required
            className="form-control"
            id="author"
            placeholder="Author"
          />
        </div>

        <div className="form-group mt-3">
          <textarea
            className="form-control"
            id="article"
            rows="5"
            placeholder="Text..."
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-outline-success mt-3">
          Submit
        </button>
      </form>
    </div>
  )
}

export default SubmitArticle
