import React from 'react'
import { Link } from 'react-router'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  accountIntro: {
    id: 'account.home.intro',
    description: 'Introduction message of the account home page',
    defaultMessage: 'Congratulations, you\'ve entered an area secured by login!'
  },
  accountSteps: {
    id: 'account.home.steps',
    description: 'Introduction message of the account home page',
    defaultMessage: 'You can {logoutLink} or try to access a {secretAreaLink} '
      + 'without a necessary permissions.'
  },
  accountSuperSecretArea: {
    id: 'account.home.link.superSecretArea',
    description: 'Link text to super secret area',
    defaultMessage: 'super secret area'
  }
})

export default class AccountHome extends React.Component {
  render () {
    const logoutLink = (<Link to="/logout">logout</Link>)
    const secretAreaLink = (
      <Link to="/account/secret-area">
        <FormattedMessage {...messages.accountSuperSecretArea} />
      </Link>)

    return (
      <div>
        <div className="header">
          <h1>Account</h1>
        </div>
        <div className="content">
          <p>
            <FormattedMessage {...messages.accountIntro} />
            <br/>
            <FormattedMessage {...messages.accountSteps}
              values={{ logoutLink, secretAreaLink }} />
          </p>
        </div>
      </div>
    )
  }
}
