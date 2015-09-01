/* global __DEVTOOLS__ */
import React, { PropTypes } from 'react'
import { Redirect, Router, Route } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from './middleware/logger'
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
    token: storage.get('token'),
    user: { permissions: [/*'manage_account'*/] }
  }
}

let combinedCreateStore
if (__DEVTOOLS__) {
  const { devTools } = require('redux-devtools')
  combinedCreateStore = compose(devTools())(createStore)
} else
  combinedCreateStore = compose()(createStore)
const finalCreateStore = applyMiddleware(thunk, logger)(combinedCreateStore)
const combinedReducer = combineReducers(reducers)
const store = finalCreateStore(combinedReducer, initialState)

function getRootChildren (history) {
  const rootChildren = [
    <Provider key="provider" store={store}>
      {renderRoutes.bind(null, history)}
    </Provider>
  ]

  if (__DEVTOOLS__) {
    const { DevTools, DebugPanel, LogMonitor } =
      require('redux-devtools/lib/react')
    rootChildren.push(
      <DebugPanel key="debug-panel" top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    )
  }
  return rootChildren
}

export default class Root extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render () {
    const { history } = this.props
    return (
      <div>{getRootChildren(history)}</div>
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
  const state = store.getState()
  const isLoggedIn = Boolean(state.application.token)
  if (!isLoggedIn)
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
