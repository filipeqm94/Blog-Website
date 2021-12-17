import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
