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
          <img src={user.avatar_url} width='72' height='72' />
          <h3>
            {user.login} {user.name && <span>({user.name})</span>}
          </h3>
        </Link>
      </div>
    )
  }
}
