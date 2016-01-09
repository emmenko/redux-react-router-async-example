import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import * as applicationActions from '../actions/application'

class DisplayError extends React.Component {

  static propTypes = {
    hideError: PropTypes.func.isRequired,
    error: PropTypes.object
  };

  render () {
    const { props: { hideError, error } } = this

    if (!error) return null

    return (
      <div className="error-message">
        <div>
          <button
            onClick={hideError}
            type="button"
            className="close-button">
            <i className="fa fa-times-circle" />
          </button>
          <p>{error.message}</p>
          <pre>
            <code>{JSON.stringify(error.body, null, 2)}</code>
          </pre>
        </div>
      </div>
    )
  }
}

export default connect(
  ({ application }) => ({ error: application.error }),
  applicationActions
)(DisplayError)
