import React, { PropTypes } from 'react'
import { connect } from 'redux/react'
import { bindActionCreators } from 'redux'
import Explore from './github/Explore'
import * as githubActions from '../actions/github'

@connect(state => ({
  github: state.github
}))
export default class Github extends React.Component {

  static propTypes = {
    children: PropTypes.any,
    dispatch: PropTypes.func.isRequired
  }

  render () {
    const { dispatch } = this.props
    const actions = bindActionCreators(githubActions, dispatch)

    return (
      <div>
        <Explore actions={actions} {...this.props} />

        {/* this will render the child routes */}
        {this.props.children &&
          React.cloneElement(this.props.children, { actions, ...this.props })}
      </div>
    )
  }
}
