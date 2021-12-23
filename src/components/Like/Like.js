import React from 'react'
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa'
const axios = require('axios')

function Like({ target, setArticle, path }) {
  const handleFeedback = action => {
    axios
      .patch(`${process.env.REACT_APP_API_URL}${path}${target._id}${action}`)
      .then(({ data }) => setArticle(data))
  }

  return (
    <div>
      <button
        onClick={() => handleFeedback('/like')}
        className="mb-3 pb-1 pt-0 mt-2 btn btn-success"
      >
        <FaRegThumbsUp />
      </button>
      <span className="mx-3 fs-6">{target.likeCount}</span>
      <button
        onClick={() => handleFeedback('/dislike')}
        className="mb-3 pb-1 pt-0 mt-2 btn btn-danger"
      >
        <FaRegThumbsDown />
      </button>
    </div>
  )
}

export default Like
