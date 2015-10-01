import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  forbidden: {
    id: 'forbidden',
    defaultMessage: 'Forbidden'
  },
  notAuthorized: {
    id: 'forbiddenReason',
    description: 'The user doesn\'t have permissions to access the page',
    defaultMessage: 'You are not authorized to see the XXX page'
  }
})

export default class Forbidden extends React.Component {
  render () {
    return (
      <div>
        <div className="header">
          <FormattedMessage {...messages.forbidden}>
            {text => <h1>{text}</h1>}
          </FormattedMessage>
        </div>
        <div className="content">
          <p>
            {/* TODO: get some info about the error */}
            <FormattedMessage {...messages.notAuthorized} />
          </p>
        </div>
      </div>
    )
  }
}
