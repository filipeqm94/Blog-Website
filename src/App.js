import { Route, useLocation, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'

import axios from 'axios'
import decode from 'jwt-decode'

import Header from './components/Header/Header'
import SubmitArticle from './components/SubmitArticle/SubmitArticle'
import Articles from './components/Articles/Articles'
import Article from './components/Article/Article'
import Edit from './components/Edit/Edit'
import Footer from './components/Footer/Footer'
import Auth from './components/Auth/Auth'

function App() {
  const [articles, setArticles] = useState(null)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  const location = useLocation()
  const history = useHistory()

  const dbURL = axios.create({ baseURL: process.env.REACT_APP_API_URL })
  dbURL.interceptors.request.use(req => {
    if (user?.token) {
      req.headers.authorization = `Bearer ${user.token}`
    }

    return req
  })

  useEffect(() => {
    dbURL.get('/articles').then(res => setArticles(res.data))

    if (user?.token) {
      const decodedToken = decode(user.token)

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        localStorage.removeItem('profile')

        setUser(null)

        history.push('/')
      }
    }
  }, [location])

  return (
    <>
      <main className="container">
        <Header user={user} setUser={setUser} />
        <Route
          exact
          path="/auth"
          render={() => <Auth user={user} setUser={setUser} dbURL={dbURL} />}
        />
        <Route exact path="/" render={() => <Articles articles={articles} />} />
        <Route
          exact
          path="/submit"
          render={() => <SubmitArticle dbURL={dbURL} />}
        />
        <Route
          exact
          path="/article/:id/edit"
          render={routerProps => (
            <Edit match={routerProps.match} dbURL={dbURL} />
          )}
        />
      </main>
      <Route
        exact
        path="/article/:id"
        render={routerProps => (
          <Article match={routerProps.match} dbURL={dbURL} />
        )}
      />
      <Footer />
    </>
  )
}

export default App
