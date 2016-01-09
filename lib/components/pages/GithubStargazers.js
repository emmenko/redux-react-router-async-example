import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { defineMessages, FormattedMessage } from 'react-intl'
import Explore from '../github/Explore'
import * as githubActions from '../../actions/github'

const messages = defineMessages({
  subtitle: {
    id: 'stargazers.subtitle',
    description: 'Subtitle of the page',
    defaultMessage: 'See the stargazers for your GitHub account and repos.'
  }
})

class GithubStargazers extends React.Component {

  static propTypes = {
    children: PropTypes.any,
    actions: PropTypes.object
  };

  render () {
    return (
      <div>
        <div className="header">
          <h1>Stargazers</h1>
          <FormattedMessage {...messages.subtitle}>
            {text => <h2>{text}</h2>}
          </FormattedMessage>
        </div>

        <Explore {...this.props} />

        {/* this will render the child routes */}
        {this.props.children &&
          React.cloneElement(this.props.children, { ...this.props })}
      </div>
    )
  }
}

export default connect(
  ({ github }) => ({ github }),
  dispatch => ({ actions: bindActionCreators(githubActions, dispatch) })
)(GithubStargazers)
