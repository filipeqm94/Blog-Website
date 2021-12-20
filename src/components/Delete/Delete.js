import React from 'react'
const axios = require('axios')

const Delete = props => {
  const handleDelete = () => {
    axios
      .delete('http://localhost:4000/api/articles/' + props.id)
      .then(() => (window.location.pathname = '/'))
  }
  return <button onClick={handleDelete}>Delete</button>
}

export default Delete
