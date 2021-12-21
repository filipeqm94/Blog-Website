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
    <div className="border-bottom border-top border-dark d-flex justify-content-between align-items-center">
      <div>
        <button onClick={handleLike} className="mb-3 mt-2 btn btn-success">
          <FaRegThumbsUp />
        </button>
        <button onClick={handleDislike} className="mb-3 mt-2 btn btn-danger">
          <FaRegThumbsDown />
        </button>
      </div>
      <div className="d-flex justify-content-between">
        <p className="text-end mt-3 me-2 fs-4">
          <span className="me-1 fs-6">
            <FaRegThumbsUp />
          </span>
          {article.likeCount}
        </p>
      </div>
    </div>
  )
}

export default Like
