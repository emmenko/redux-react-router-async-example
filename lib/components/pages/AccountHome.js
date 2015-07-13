import React from 'react'
import { Link } from 'react-router'

export default class AccountHome extends React.Component {
  render () {
    return (
      <div>
        <div className="header">
          <h1>Account</h1>
        </div>
        <div className="content">
          <p>
            Congratulations, you've entered an area secured by login!
            <br/>
            You can <Link to="/logout">logout</Link>
            {' '}
            or try to access a
            {' '}
            <Link to="/account/secret-area">super secret area</Link>
            {' '}
            without a necessary permissions.
          </p>
        </div>
      </div>
    )
  }
}
