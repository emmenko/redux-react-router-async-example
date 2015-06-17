import React from 'react'
import { Router, Route } from 'react-router'
import BrowserHistory from 'react-router/lib/BrowserHistory'
import { About, Application, Blog } from './components'

React.render((
  <Router history={new BrowserHistory()}>
    <Route path="/" component={Application}>
      <Route path="about" component={About} />
      <Route path="blog" component={Blog} />
    </Route>
  </Router>
), document.getElementById('app'))
