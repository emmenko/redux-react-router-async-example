import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import { secure } from '../../decorators'

const messages = defineMessages({
  info: {
    id: 'superSecretArea.info',
    description: 'Intro message describing the page',
    defaultMessage: 'This is a restricted area.'
  }
})

@secure('manage_account')
export default class SuperSecretArea extends React.Component {
  render () {
    return (
      <div>
        <div className="header">
          <h1>SuperSecretArea</h1>
        </div>
        <div className="content">
          <p><FormattedMessage {...messages.info} /></p>
        </div>
      </div>
    )
  }
}
