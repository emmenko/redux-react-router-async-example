/*eslint-disable max-len*/
import React from 'react'
import { FormattedMessage } from 'react-intl'

export default class Home extends React.Component {

  render () {
    return (
      <div>
        <div className="header">
          <h1>
            <FormattedMessage
              id="home.welcome"
              description="Welcome message to the user"
              defaultMessage="Welcome" />
          </h1>
        </div>
        <div className="content">
          <p>
            This website is a boilerplate example showcasing mostly
            {' '}
            <a href="https://github.com/gaearon/redux"
              target="_blank">Redux</a>
            {' '}
            and
            {' '}
            <a href="https://github.com/rackt/react-router"
              target="_blank">React Router</a>.
          </p>
          <p>
            I recommend looking into the source code for inspiration
            {' '}
            and ideas on how to implement many different use cases.
            <br/>
            I also plan to continuously add and demo case different
            {' '}
            kind of features that are commons in web applications.
          </p>
          <p>
            Stay tuned and enjoy! For any question feel free to
            {' '}
            <a href="https://github.com/emmenko/redux-react-router-async-example/issues"
              target="_blank">drop an issue</a>,
            {' '}
            I'll be happy to provide some help whenever possible.
            {' '}
            And any pull-request is very much welcomed! ;)
          </p>
        </div>
      </div>
    )
  }
}
