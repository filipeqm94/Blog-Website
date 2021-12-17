import { Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import axios from 'axios'

import Nav from './components/Nav/Nav'
import SubmitArticle from './components/SubmitArticle/SubmitArticle'
import Articles from './components/Articles/Articles'

import './App.css'

const dbURL = 'http://localhost:4000/api/articles'

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios.get(dbURL).then(res => setArticles(res.data))
  }, [])

  return (
    <div className="App">
      <h1>Hello</h1>
      {/* INSERT COMPONENTS BELOW */}
      <Route exact path="/" component={Nav} />
      <Route exact path="/" render={() => <Articles articles={articles} />} />
      <Route exact path="/submit" component={SubmitArticle} />
      {/* INSERT COMPONENTS ABOVE */}
    </div>
  )
}

export default App
