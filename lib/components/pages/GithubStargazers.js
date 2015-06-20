import React, { PropTypes } from 'react'
import { connect } from 'redux/react'
import { bindActionCreators } from 'redux'
import Explore from '../github/Explore'
import * as githubActions from '../../actions/github'

@connect(state => ({
  github: state.github
}))
export default class GithubStargazers extends React.Component {

  static propTypes = {
    children: PropTypes.any,
    dispatch: PropTypes.func.isRequired
  }

  render () {
    const { dispatch } = this.props
    const actions = bindActionCreators(githubActions, dispatch)

    return (
      <div>
        <div className="header">
          <h1>Stargazers</h1>
          <h2>See the stargazers for your GitHub account and repos.</h2>
        </div>

        <Explore actions={actions} {...this.props} />

        {/* this will render the child routes */}
        {this.props.children &&
          React.cloneElement(this.props.children, { actions, ...this.props })}
      </div>
    )
  }
}
