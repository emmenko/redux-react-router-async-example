import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default class StargazersUser extends React.Component {

  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render () {
    const { user } = this.props

    return (
      <div>
        <Link to={`/github/${user.login}`}>
          <img src={user.avatar_url} width='72' height='72'
            style={{ borderRadius: '100px' }} />
          <p>
            {user.login}
            {' '}
            <small>{user.name && <span>({user.name})</span>}</small>
          </p>
        </Link>
      </div>
    )
  }
}
