import React from 'react'
import { defineMessage, FormattedHTMLMessage } from 'react-intl'

const builtWith = defineMessage({
  id: 'footer.builtWith',
  description: 'Mention how the site is built with',
  defaultMessage: 'This site is built with <3 using ' +
    '<a href="http://purecss.io/" target="_blank">PureCSS</a>'
})

export default class Footer extends React.Component {

  render () {
    return (
      <div className="footer">
        <div className="pure-g">
          <div className="pure-u-1 u-sm-1-2">
            <FormattedHTMLMessage {...builtWith} />
          </div>
          <div className="pure-u-1 u-sm-1-2">
            &copy; 2015
          </div>
        </div>
      </div>
    )
  }
}
