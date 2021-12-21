import React from 'react'
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
      <button onClick={handleLike}>Like</button>
      <span>{article.likeCount}</span>
      <button onClick={handleDislike}>Dislike</button>
    </div>
  )
}

export default Like
