import React, { findDOMNode, PropTypes } from 'react'
import shallowEqualScalar from 'redux/lib/utils/shallowEqualScalar'

const DEFAULT_USER = 'emmenko'

function parseFullName (params) {
  const { username, repo } = params
  if (!username) return DEFAULT_USER

  return username + (repo ? '/' + repo : '')
}

export default class Explore extends React.Component {

  static propTypes = {
    params: PropTypes.shape({
      repo: PropTypes.string,
      username: PropTypes.string
    })
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleGoClick = this.handleGoClick.bind(this)
    this.getInputValue = this.getInputValue.bind(this)

    // State that depends on props is often an anti-pattern, but in our case
    // that's what we need to we can update the input both in response to route
    // change and in response to user typing.
    this.state = {
      usernameOrRepo: parseFullName(props.params)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!shallowEqualScalar(this.props.params, nextProps.params))
      this.setState({
        usernameOrRepo: parseFullName(nextProps.params)
      })
  }

  render () {
    return (
      <div className="content">
        <form className="explore pure-form" onSubmit={e => e.preventDefault()}>
          <fieldset>
            <legend>Type a username or repo full name and hit 'Go':</legend>
            <input
              size="45"
              ref="usernameOrRepo"
              onKeyUp={this.handleKeyUp}
              onChange={this.handleOnChange}
              value={this.state.usernameOrRepo}
              placeholder="username/repo" />
            <button type="submit" className="pure-button pure-button-primary"
              onClick={this.handleGoClick}>
              Go!
            </button>
          </fieldset>
        </form>
      </div>
    )
  }

  handleKeyUp (e) {
    if (e.keyCode === 13)
      this.handleGoClick()
  }

  handleOnChange () {
    // Update the internal state because we are using a controlled input.
    // This way we can update it *both* in response to user input *and*
    // in response to navigation in `componentWillReceiveProps`.
    this.setState({
      usernameOrRepo: this.getInputValue()
    })
  }

  handleGoClick () {
    this.context.router.transitionTo(`/stargazers/${this.getInputValue()}`)
  }

  getInputValue () {
    return findDOMNode(this.refs.usernameOrRepo).value
  }
}
