import React, { PropTypes } from 'react'
import * as actions from '../../actions/application'

export default class Login extends React.Component {

  static propTypes = {
    location: PropTypes.object
  }

  static contextTypes = {
    redux: PropTypes.any,
    router: PropTypes.any
  }

  handleSubmit (evt) {
    evt.preventDefault()
    const { redux, router } = this.context
    const { location } = this.props

    // should login
    setImmediate(() => {
      // dispatch that I'm logged in
      redux.dispatch(actions.logIn())
      router.transitionTo(location.state.nextPathname)
    })
  }

  render () {
    return (
      <div>
        <div className="header">
          <h1>Login</h1>
        </div>
        <div className="content">
          <form onSubmit={::this.handleSubmit}>
            <fieldset>
              <input type="email" defaultValue="foo@bar.com" />
              <input type="password" defaultValue="secret" />
              <button type="submit">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}
