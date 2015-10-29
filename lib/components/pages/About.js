import React from 'react'
import { Link } from 'react-router'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  aboutThanks: {
    id: 'about.specialThanks',
    description: 'Thanks to Dan Abramov for the idea of Redux',
    defaultMessage: 'A special thanks to {link} ' +
      'for kicking out the idea of {redux}!'
  },
  librariesIntro: {
    id: 'about.librariesIntro',
    description: 'Intro about technologies used on the website',
    defaultMessage: 'This website is a showcase of different technologies ' +
      'and libraries such as:'
  }
})

export default class About extends React.Component {
  render () {
    const link = (<Link to="/stargazers/gaearon"><code>@gaearon</code></Link>)
    const redux = (<code>Redux</code>)

    return (
      <div>
        <div className="header">
          <h1>About</h1>
        </div>
        <div className="content">
          <p><FormattedMessage {...messages.aboutThanks}
            values={{ link, redux }} /></p>

          <h2>Libraries</h2>
          <p>
            <FormattedMessage {...messages.librariesIntro} />
          </p>
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
        </div>
      </div>
    )
  }
}
