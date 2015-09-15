import React from 'react'
// import { Link } from 'react-router'
import {
  defineMessage,
  FormattedHTMLMessage
} from 'react-intl'

const accountIntro = defineMessage({
  id: 'account.home.intro',
  description: 'Introduction message of the account home page',
  defaultMessage: 'Congratulations, you\'ve entered an area secured by login!' +
    '<br/>' +
    'You can <a href="/logout">logout</a> or try to access a ' +
    '<a href="/account/secret-area">super secret area</a> ' +
    'without a necessary permissions.'
})

export default class AccountHome extends React.Component {
  render () {
    return (
      <div>
        <div className="header">
          <h1>Account</h1>
        </div>
        <div className="content">
          <p>
            <FormattedHTMLMessage {...accountIntro} />
          </p>
        </div>
      </div>
    )
  }
}
