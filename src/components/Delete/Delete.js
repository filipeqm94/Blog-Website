import React from 'react'
import { useHistory } from 'react-router-dom'
const axios = require('axios')

const Delete = ({ id, dbURL }) => {
  const history = useHistory()

  const handleDelete = () => {
    dbURL
      .delete(process.env.REACT_APP_API_URL + '/articles/' + id)
      .then(() => axios.get(process.env.REACT_APP_API_URL + '/articles'))
      .then(() => history.push('/'))
  }
  return (
    <button className="btn btn-danger py-1" onClick={handleDelete}>
      Delete
    </button>
  )
}

export default Delete
