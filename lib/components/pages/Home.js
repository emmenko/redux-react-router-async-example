/*eslint-disable max-len*/
import React from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  welcome: {
    id: 'home.welcome',
    description: 'Welcome message to the user',
    defaultMessage: 'Welcome'
  },
  intro: {
    id: 'home.intro',
    description: 'Introductive message about the website',
    defaultMessage: 'This website is a boilerplate example to showcase and ' +
      'provide best practices around {linkRedux} and {linkRouter}.'
  },
  intro2: {
    id: 'home.intro2',
    description: 'Recommendation and scope of the website',
    defaultMessage: 'I recommend looking into the source code for inspiration ' +
      'and ideas on how to implement many different use cases.' +
      '{br}' +
      'I also plan to continuously add and demo case different ' +
      'kind of features that are commons in web applications.'
  },
  intro3: {
    id: 'home.intro3',
    description: 'Mention contributions',
    defaultMessage: 'Stay tuned and enjoy! For any question feel free to ' +
      '{linkIssues}, I\'ll be happy to provide some help whenever possible. ' +
      'And any pull-request is very much welcomed! ;)'
  },
  dropIssue: {
    id: 'home.intro3.dropAnIssue',
    defaultMessage: 'drop an issue'
  }
})


export default class Home extends React.Component {

  render () {
    const linkRedux = (<a href="https://github.com/gaearon/redux"
      target="_blank">Redux</a>)
    const linkRouter = (<a href="https://github.com/rackt/react-router"
      target="_blank">React Router</a>)
    const linkIssues = (<a
      href="https://github.com/emmenko/redux-react-router-async-example/issues"
      target="_blank"><FormattedMessage {...messages.dropIssue} /></a>)
    return (
      <div>
        <div className="header">
          <FormattedMessage {...messages.welcome}>
            {text => <h1>{text}</h1>}
          </FormattedMessage>
        </div>
        <div className="content">
          <p>
            <FormattedMessage {...messages.intro} values={{ linkRedux, linkRouter }} />
          </p>
          <p>
            <FormattedMessage {...messages.intro2} values={{ br: (<br/>) }} />
          </p>
          <p>
            <FormattedMessage {...messages.intro3} values={{ linkIssues }} />
          </p>
        </div>
      </div>
    )
  }
}
