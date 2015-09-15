import React from 'react'
// import { Link } from 'react-router'
import {
  defineMessage,
  FormattedMessage,
  FormattedHTMLMessage
} from 'react-intl'

const aboutThanks = defineMessage({
  id: 'about.specialThanks',
  description: 'Thanks to Dan Abramov for the idea of Redux',
  defaultMessage: 'A special thanks to ' +
    '<a href="/stargazers/gaearon"><code>@gaearon</code></a> ' +
    'for kicking out the idea of <code>Redux</code>!'
})
// FIXME: https://github.com/yahoo/react-intl/issues/137#issuecomment-140449402
// const link = (<Link to="/stargazers/gaearon"><code>@gaearon</code></Link>)

const librariesIntro = defineMessage({
  id: 'about.librariesIntro',
  description: 'Intro about technologies used on the website',
  defaultMessage: 'This website is a showcase of different technologies ' +
    'and libraries such as:'
})

export default class About extends React.Component {
  render () {
    return (
      <div>
        <div className="header">
          <h1>About</h1>
        </div>
        <div className="content">
          <p><FormattedHTMLMessage {...aboutThanks} /></p>

          <h2>Libraries</h2>
          <p>
            <FormattedMessage {...librariesIntro} />
            <ul>
              <li>
                <a href="https://github.com/facebook/react" target="_blank">
                  React.js
                </a>
              </li>
              <li>
                <a href="https://github.com/gaearon/redux" target="_blank">
                  Redux
                </a>
              </li>
              <li>
                <a href="https://github.com/rackt/react-router" target="_blank">
                  React Router
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    )
  }
}
