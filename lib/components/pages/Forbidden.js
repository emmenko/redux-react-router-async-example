import React from 'react'
import { defineMessage, FormattedMessage } from 'react-intl'

const forbidden = defineMessage({
  id: 'forbidden',
  defaultMessage: 'Forbidden'
})
const notAuthorized = defineMessage({
  id: 'forbiddenReason',
  description: 'The user doesn\'t have permissions to access the page',
  defaultMessage: 'You are not authorized to see the XXX page'
})

export default class Forbidden extends React.Component {
  render () {
    return (
      <div>
        <div className="header">
          <FormattedMessage {...forbidden}>
            {text => <h1>{text}</h1>}
          </FormattedMessage>
        </div>
        <div className="content">
          <p>
            {/* TODO: get some info about the error */}
            <FormattedMessage {...notAuthorized} />
          </p>
        </div>
      </div>
    )
  }
}
