import React from 'react'
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa'

function Like({ target, setArticle, path, dbURL }) {
  const handleFeedback = action => {
    dbURL
      .patch(`${path}/${target._id}${action}`)
      .then(({ data }) => setArticle(data))
  }

  return (
    <div className="mt-3">
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
