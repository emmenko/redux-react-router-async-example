import React, { PropTypes } from 'react'
import * as actions from '../../actions/application'

export default class Login extends React.Component {

  static propTypes = {
    location: PropTypes.object
  }

  static contextTypes = {
    store: PropTypes.any,
    history: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = { email: null, password: null }
  }

  handleInputChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    const { history, store } = this.context
    const { location } = this.props

    const nextPath = location.query.nextPathname || '/account'
    store.dispatch(actions.login(this.state, () => {
      // redirect to a secure page
      history.pushState({}, nextPath)
    }))
  }

  render () {
    return (
      <div>
        <div className="header">
          <h1>Login</h1>
        </div>
        <div className="content">
          <form
            className="explore pure-form pure-form-aligned"
            onSubmit={::this.handleSubmit}
            onChange={::this.handleInputChange}>
            <fieldset>
              <div className="pure-control-group">
                <label htmlFor="email">Email</label>
                <input type="email" defaultValue="foo@bar.com" />
              </div>
              <div className="pure-control-group">
                <label htmlFor="password">Password</label>
                <input type="password" defaultValue="secret" />
              </div>
              <button type="submit"
                className="pure-button pure-button-primary"
                >Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}
