import React from 'react'
import { Router, Route } from 'react-router'
import BrowserHistory from 'react-router/lib/BrowserHistory'
import { About, Application, Github, GithubRepo,
  GithubUser } from './components'

React.render((
  <Router history={new BrowserHistory()}>
    <Route path="/" component={Application}>
      <Route path="about" component={About} />
      <Route path="github" component={Github}>
        <Route name='repo' path=':login/:name' component={GithubRepo} />
        <Route name='user' path=':login' component={GithubUser} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
