import React from 'react'
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa'
const axios = require('axios')

function Like(props) {
  const article = props.article
  const setArticle = props.setArticle

  const handleLike = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}articles/${article._id}`)
      .then(res => {
        axios
          .patch(`${process.env.REACT_APP_API_URL}articles/${article._id}`, {
            likeCount: res.data.likeCount + 1
          })
          .then(res =>
            setArticle(prevState => ({
              ...prevState,
              likeCount: res.data.likeCount
            }))
          )
      })
  }

  const handleDislike = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}articles/${article._id}`)
      .then(res => {
        axios
          .patch(`${process.env.REACT_APP_API_URL}articles/${article._id}`, {
            likeCount: res.data.likeCount - 1
          })
          .then(res =>
            setArticle(prevState => ({
              ...prevState,
              likeCount: res.data.likeCount
            }))
          )
      })
  }
  return (
    <div>
      <button
        onClick={handleLike}
        className="mb-3 pb-1 pt-0 mt-2 btn btn-success"
      >
        <FaRegThumbsUp />
      </button>
      <span className="mx-3 fs-6">{article.likeCount}</span>
      <button
        onClick={handleDislike}
        className="mb-3 pb-1 pt-0 mt-2 btn btn-danger"
      >
        <FaRegThumbsDown />
      </button>
    </div>
  )
}

export default Like
