import React from 'react'
import { Router, Route } from 'react-router'
import BrowserHistory from 'react-router/lib/BrowserHistory'
import { Provider } from 'redux/react'
import { createDispatcher, createRedux, composeStores } from 'redux'
import { loggerMiddleware, thunkMiddleware } from './middleware'
import { About, Application, Github, GithubRepo,
  GithubUser } from './components'
import * as stores from './stores'

const dispatcher = createDispatcher(
  composeStores(stores),
  getState => [ thunkMiddleware(getState), loggerMiddleware ]
)
const redux = createRedux(dispatcher)

React.render((
  <Provider redux={redux}>
    {() =>
      <Router history={new BrowserHistory()}>
        <Route path="/" component={Application}>
          <Route path="about" component={About} />
          <Route path="github" component={Github}>
            <Route name='repo' path=':username/:repo' component={GithubRepo} />
            <Route name='user' path=':username' component={GithubUser} />
          </Route>
        </Route>
      </Router>
    }
  </Provider>
), document.getElementById('app'))
