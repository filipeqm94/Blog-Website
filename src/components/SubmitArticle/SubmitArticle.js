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
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Title"
          />
        </div>

        <div class="form-group mt-3">
          <input
            type="text"
            required
            class="form-control"
            id="author"
            placeholder="Author"
          />
        </div>

        <div class="form-group mt-3">
          <textarea
            class="form-control"
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
