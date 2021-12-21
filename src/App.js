import { Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import axios from 'axios'

import Header from './components/Header/Header'
import SubmitArticle from './components/SubmitArticle/SubmitArticle'
import Articles from './components/Articles/Articles'
import Article from './components/Article/Article'
import Edit from './components/Edit/Edit'

const dbURL = process.env.REACT_APP_API_URL + 'articles'

function App() {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    axios.get(dbURL).then(res => setArticles(res.data))
  }, [articles])

  return (
    <div className="container">
      <div>
        <Header />
      </div>
      {/* INSERT COMPONENTS BELOW */}
      <Route exact path="/" render={() => <Articles articles={articles} />} />
      <Route exact path="/submit" component={SubmitArticle} />
      <Route
        exact
        path="/article/:id"
        render={routerProps => <Article match={routerProps.match} />}
      />
      <Route
        exact
        path="/article/:id/edit"
        render={routerProps => <Edit match={routerProps.match} />}
      />
      {/* INSERT COMPONENTS ABOVE */}
    </div>
  )
}

export default App
