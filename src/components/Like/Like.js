import React from 'react'
const axios = require('axios')

function Like(props) {
  const article = props.article
  const setArticle = props.setArticle

  const handleLike = () => {
    axios.get(`http://localhost:4000/api/articles/${article._id}`).then(res => {
      axios
        .patch(`http://localhost:4000/api/articles/${article._id}`, {
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
    axios.get(`http://localhost:4000/api/articles/${article._id}`).then(res => {
      axios
        .patch(`http://localhost:4000/api/articles/${article._id}`, {
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
