import React from 'react'
const axios = require('axios')

const Delete = props => {
  const handleDelete = () => {
    axios
      .delete(process.env.REACT_APP_API_URL + 'articles/' + props.id)
      .then(() => (window.location.pathname = '/'))
  }
  return <button onClick={handleDelete}>Delete</button>
}

export default Delete
