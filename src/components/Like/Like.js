import React from 'react'
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa'
const axios = require('axios')

function Like({ article, setArticle }) {
  const handleFeedback = action => {
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}articles/${article._id}/${action}`
      )
      .then(({ data }) => setArticle(data))
  }

  return (
    <div>
      <button
        onClick={() => handleFeedback('like')}
        className="mb-3 pb-1 pt-0 mt-2 btn btn-success"
      >
        <FaRegThumbsUp />
      </button>
      <span className="mx-3 fs-6">{article.likeCount}</span>
      <button
        onClick={() => handleFeedback('dislike')}
        className="mb-3 pb-1 pt-0 mt-2 btn btn-danger"
      >
        <FaRegThumbsDown />
      </button>
    </div>
  )
}

export default Like
