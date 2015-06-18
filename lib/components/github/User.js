import React, { PropTypes } from 'react'
import { fetchOnUpdate } from '../decorators'
import StargazersRepo from './StargazersRepo'
import StargazersUser from './StargazersUser'

@fetchOnUpdate({ username: 'username' }, (params, actions) => {
  actions.fetchUser(params.username)
  actions.fetchUserStargazers(params.username)
})
export default class User extends React.Component {

  static propTypes = {
    actions: PropTypes.object,
    github: PropTypes.object
  }

  render () {
    const { user, stargazers } = this.props.github

    return (
      <div>
        <StargazersUser user={user} />

        <div>
          {stargazers.user.map((repo, i) =>
            <StargazersRepo key={i} repo={repo} />
          )}
        </div>
      </div>
    )
  }
}
