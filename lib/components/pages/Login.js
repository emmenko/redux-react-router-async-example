import React, { PropTypes } from 'react'
import * as storage from '../../persistence/storage'
import * as actions from '../../actions/application'

export default class Login extends React.Component {

  static propTypes = {
    location: PropTypes.object
  }

  static contextTypes = {
    store: PropTypes.any,
    router: PropTypes.any
  }

  constructor(props, context) {
    super(props, context)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (evt) {
    evt.preventDefault()
    const { store, router } = this.context
    const { location } = this.props

    // should login
    setImmediate(() => {
      // dispatch that I'm logged in
      store.dispatch(actions.logIn())
      storage.put('token', Math.random().toString(36).substring(7))
      router.transitionTo(location.state.nextPathname || '/account')
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
