import React, { PropTypes } from 'react'
import { Redirect, Router, Route } from 'react-router'
import { Provider } from 'redux/react'
import { createStore, composeReducers } from 'redux'
import { loggerMiddleware, thunkMiddleware } from './middleware'
import * as components from './components'
import * as reducers from './reducers'

const {
  Application,
  About,
  GithubStargazers,
  GithubRepo,
  GithubUser
} = components

const store = createStore(
  composeReducers(reducers), // reducer: Function | Object
  {}, // initialState: any
  ({ getState }) => [ // middlewares: ({ getState, dispatch }) => Array
    thunkMiddleware(getState),
    loggerMiddleware
  ]
)

window.s = store

export default class Root extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render () {
    const { history } = this.props
    return (
      <Provider store={store}>
        {() => this.renderRoutes(history)}
      </Provider>
    )
  }

  renderRoutes (history) {
    return (
      <Router history={history}>
        <Route component={Application}>
          <Route path="about" component={About} />
          <Route path="stargazers" component={GithubStargazers}>
            <Route name='repo' path=':username/:repo' component={GithubRepo} />
            <Route name='user' path=':username' component={GithubUser} />
          </Route>
          <Redirect from="/" to="/stargazers/emmenko" />
        </Route>
      </Router>
    )
  }
}
