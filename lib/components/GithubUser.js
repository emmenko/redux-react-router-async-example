import React, { PropTypes } from 'react'
import { fetchOnUpdate } from './decorators'
import GithubStargazersRepo from './GithubStargazersRepo'
import GithubStargazersUser from './GithubStargazersUser'

@fetchOnUpdate({ username: 'username' }, (params, actions) => {
  actions.fetchUser(params.username)
  actions.fetchUserStargazers(params.username)
})
export default class GithubUser extends React.Component {

  static propTypes = {
    actions: PropTypes.object,
    github: PropTypes.object
  }

  render () {
    const { user, stargazers } = this.props.github

    return (
      <div>
        <GithubStargazersUser user={user} />

        <div>
          {stargazers.user.map((repo, i) =>
            <GithubStargazersRepo key={i} repo={repo} />
          )}
        </div>
      </div>
    )
  }
}
