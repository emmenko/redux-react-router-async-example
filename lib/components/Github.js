import React, { PropTypes } from 'react'
import GithubExplore from './GithubExplore'

export default class Github extends React.Component {

  static propTypes = {
    children: PropTypes.any
  }

  render () {
    return (
      <div>
        <GithubExplore {...this.props} />

        {/* this will render the child routes */}
        {this.props.children}
      </div>
    )
  }
}
