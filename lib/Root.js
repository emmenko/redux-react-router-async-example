import React, { PropTypes } from 'react'
import { Redirect, Router, Route } from 'react-router'
import { Provider } from 'redux/react'
import { createDispatcher, createRedux, composeStores } from 'redux'
import { loggerMiddleware, thunkMiddleware } from './middleware'
import * as components from './components'
import * as stores from './stores'

const {
  About,
  Account,
  Application,
  GithubStargazers,
  GithubRepo,
  GithubUser,
  Login
} = components
const dispatcher = createDispatcher(
  composeStores(stores),
  getState => [ thunkMiddleware(getState), loggerMiddleware ]
)
// TODO: rehydrate state from localStorage
const redux = createRedux(dispatcher)

export default class Root extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render () {
    const { history } = this.props
    return (
      <Provider redux={redux}>
        {renderRoutes.bind(null, history)}
      </Provider>
    )
  }
}

// TODO:
// - after login, save token in localStorage
// - add a link to clear the storage so that login works again
function requireAuth (nextState, transition) {
  if (!redux.getState().application.loggedIn)
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
