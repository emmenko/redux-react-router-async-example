import React, { PropTypes } from 'react'

export default class GithubUser extends React.Component {

  static propTypes = {
    actions: PropTypes.object
  }

  render () {
    return (
      <h2>This is the github user page!</h2>
    )
  }
}
