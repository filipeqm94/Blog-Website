import React from 'react'
import './SubmitArticle.css'

import { Link } from 'react-router-dom'

function SubmitArticle(props) {
  return (
    <div className="article-box">
      <form>
        <input className="title" type="text" placeholder="Title" />
        <br />
        <textarea className="article" type="text" placeholder="Text..." />
        <br />
        <div className="buttons">
          <Link to={'/'}>
            <button className="back">Back</button>
          </Link>
          <button className="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default SubmitArticle
