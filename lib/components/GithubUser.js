import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { fetchOnUpdate } from './decorators'

@fetchOnUpdate('username', (param, actions) => actions.fetchUser(param))
export default class GithubUser extends React.Component {

  static propTypes = {
    actions: PropTypes.object,
    github: PropTypes.object
  }

  render () {
    const { user } = this.props.github

    return (
      <div>
        <Link to={`/github/${user.login}`}>
          <img src={user.avatar_url} width='72' height='72' />
          <h3>
            {user.login} {user.name && <span>({user.name})</span>}
          </h3>
        </Link>

        <div>
          Starred repos...
        </div>
      </div>
    )
  }
}
