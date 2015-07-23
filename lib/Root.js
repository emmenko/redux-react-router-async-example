import React, { PropTypes } from 'react'
import { Redirect, Router, Route } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from './middleware/logger'
import * as storage from './persistence/storage'
import * as components from './components'
import * as reducers from './reducers'
import * as constants from './constants'

const {
  About,
  Account,
  AccountHome,
  Application,
  GithubStargazers,
  GithubRepo,
  GithubUser,
  Home,
  Login,
  SuperSecretArea
} = components

const initialState = {
  application: {
    loggedIn: !!storage.get('token'),
    user: { permissions: [/*'manage_account'*/] }
  }
}

const reducer = combineReducers(reducers)
const finalCreateStore = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore)
const store = finalCreateStore(reducer, initialState)

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

function renderRoutes (history) {
  return (
    <Router history={history}>
      <Route component={Application}>
        <Route path="/" component={Home} />
        <Redirect from="/account" to="/account/profile" />
        <Route path="stargazers" component={GithubStargazers}>
          <Route path=':username/:repo' component={GithubRepo} />
          <Route path=':username' component={GithubUser} />
        </Route>
        <Route path="about" component={About} />
        <Route path="account" component={Account} onEnter={requireAuth}>
          <Route path="profile" component={AccountHome} />
          <Route path="secret-area" component={SuperSecretArea} />
        </Route>
        <Route path="login" component={Login} />
        <Route path="logout" onEnter={logout} />
      </Route>
    </Router>
  )
}

function requireAuth (nextState, transition) {
  if (!store.getState().application.loggedIn)
    transition.to('/login', null, {
      nextPathname: nextState.location.pathname
    })
}

function logout (nextState, transition) {
  storage.remove('token')
  // TODO: find a better way to do this
  store.dispatch({ type: constants.LOG_OUT })
  transition.to('/login')
}
