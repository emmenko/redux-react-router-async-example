import React from 'react'
import { Router, Route } from 'react-router'
import BrowserHistory from 'react-router/lib/BrowserHistory'
import { Provider } from 'redux/react'
import { createDispatcher, createRedux, composeStores } from 'redux'
import { loggerMiddleware, thunkMiddleware } from './middleware'
import { About, Application, Github, GithubRepo,
  GithubUser } from './components'
import * as stores from './stores'

export default class Root extends React.Component {
    constructor(props) {
      super(props)
      this.history = new BrowserHistory()
    }

    render() {
        const dispatcher = createDispatcher(
          composeStores(stores),
          getState => [ thunkMiddleware(getState), loggerMiddleware ]
        )
        const redux = createRedux(dispatcher)
        <Provider redux={redux}>
            {() =>
              <Router history={this.history}>
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
    }
}
