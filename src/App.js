import { Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import axios from 'axios'

import Header from './components/Header/Header'
import SubmitArticle from './components/SubmitArticle/SubmitArticle'
import Articles from './components/Articles/Articles'
import Article from './components/Article/Article'
import Edit from './components/Edit/Edit'
import Footer from './components/Footer/Footer'
import Auth from './components/Auth/Auth'

const dbURL = process.env.REACT_APP_API_URL + 'articles'

function App() {
  const [articles, setArticles] = useState(null)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  const location = useLocation()

  useEffect(() => {
    axios.get(dbURL).then(res => setArticles(res.data))
  }, [location])

  return (
    <>
      <main className="container">
        <Header user={user} />
        <Route
          exact
          path="/auth"
          render={() => <Auth user={user} setUser={setUser} />}
        />
        <Route exact path="/" render={() => <Articles articles={articles} />} />
        <Route exact path="/submit" component={SubmitArticle} />
        <Route
          exact
          path="/article/:id/edit"
          render={routerProps => <Edit match={routerProps.match} />}
        />
      </main>
      <Route
        exact
        path="/article/:id"
        render={routerProps => <Article match={routerProps.match} />}
      />
      <Footer />
    </>
  )
}

export default App
