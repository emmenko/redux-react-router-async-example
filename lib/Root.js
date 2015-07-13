import React, { PropTypes } from 'react'
import { Redirect, Router, Route } from 'react-router'
import { Provider } from 'redux/react'
import { createStore, composeReducers } from 'redux'
import { loggerMiddleware, thunkMiddleware } from './middleware'
import * as storage from './persistence/storage'
import * as components from './components'
import * as reducers from './reducers'

const {
  About,
  Account,
  Application,
  GithubStargazers,
  GithubRepo,
  GithubUser,
  Login
} = components

const initialState = {
  application: {
    loggedIn: !!storage.get('token'),
    user: { permissions: [] }
  }
}

const store = createStore(
  composeReducers(reducers),
  initialState,
  ({ dispatch, getState }) => [
    thunkMiddleware({ dispatch, getState }),
    loggerMiddleware(getState)
  ]
)

export default class Root extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render () {
    const { history } = this.props
    return (
      <Provider store={store}>
        {renderRoutes.bind(null, history)}
      </Provider>
    )
  }
}

// TODO:
// - add a link to clear the storage so that login works again
function requireAuth (nextState, transition) {
  if (!store.getState().application.loggedIn)
    transition.to('/login', null, {
      nextPathname: nextState.location.pathname
    })
}

// TODO: add logout route
function renderRoutes (history) {
  return (
    <Router history={history}>
      <Route path="login" component={Login} />
      <Route component={Application} onEnter={requireAuth}>
        <Route path="about" component={About} />
        <Route path="account" component={Account} />
        <Route path="stargazers" component={GithubStargazers}>
          <Route name='repo' path=':username/:repo' component={GithubRepo} />
          <Route name='user' path=':username' component={GithubUser} />
        </Route>
        <Redirect from="/" to="/stargazers/emmenko" />
      </Route>
    </Router>
  )
}
