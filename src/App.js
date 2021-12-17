import { Route } from 'react-router-dom'
import Articles from './components/Articles/Articles'

import Nav from './components/Nav/Nav'
import SubmitArticle from './components/SubmitArticle/SubmitArticle'

import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* INSERT COMPONENTS BELOW */}
      <Route exact path="/" component={Nav} />
      <Route exact path="/" component={Articles} />
      <Route exact path="/submit" component={SubmitArticle} />
      {/* INSERT COMPONENTS ABOVE */}
    </div>
  )
}

export default App
