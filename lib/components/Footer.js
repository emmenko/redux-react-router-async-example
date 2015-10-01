import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  builtWith: {
    id: 'footer.builtWith',
    description: 'Mention how the site is built with',
    defaultMessage: 'This site is built with <3 using {link}'
  }
})

export default class Footer extends React.Component {

  render () {
    const link = (<a href="http://purecss.io/" target="_blank">PureCSS</a>)
    return (
      <div className="footer">
        <div className="pure-g">
          <div className="pure-u-1 u-sm-1-2">
            <FormattedMessage {...messages.builtWith} values={{ link }} />
          </div>
          <div className="pure-u-1 u-sm-1-2">
            &copy; 2015
          </div>
        </div>
      </div>
    )
  }
}
