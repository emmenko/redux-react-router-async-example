import '../assets/stylesheets/index.css'
import React from 'react'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import createHashHistory from 'history/lib/createHashHistory'
import Root from './Root'

// Use hash location for Github Pages
// but switch to HTML5 history locally.
const history = process.env.NODE_ENV === 'production' ?
  createHashHistory() :
  createBrowserHistory()

React.render(<Root history={history} />, document.getElementById('app'))
