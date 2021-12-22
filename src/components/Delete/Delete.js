import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
const axios = require('axios')

const Delete = ({ id, setArticles }) => {
  const [redirect, setRedirect] = useState(null)
  const handleDelete = () => {
    axios
      .delete(process.env.REACT_APP_API_URL + 'articles/' + id)
      .then(() => axios.get(process.env.REACT_APP_API_URL + 'articles'))
      .then(res => setArticles(res.data))
      .then(() => setRedirect('/'))
  }
  return (
    <button className="btn btn-danger py-1" onClick={handleDelete}>
      {redirect ? <Redirect to={redirect} /> : null}
      Delete
    </button>
  )
}

export default Delete
