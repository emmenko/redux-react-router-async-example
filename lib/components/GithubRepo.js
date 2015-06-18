import React, { PropTypes } from 'react'
import { fetchOnUpdate } from './decorators'
import GithubStargazersRepo from './GithubStargazersRepo'
import GithubStargazersUser from './GithubStargazersUser'

@fetchOnUpdate({
  username: 'username',
  repo: 'repo'
}, (params, actions) => {
  actions.fetchRepo(params.username, params.repo)
  actions.fetchRepoStargazers(params.username, params.repo)
})
export default class GithubRepo extends React.Component {

  static propTypes = {
    actions: PropTypes.object,
    github: PropTypes.object
  }

  render () {
    const { repo, stargazers } = this.props.github

    return (
      <div>
        {repo.owner && <GithubStargazersRepo repo={repo} />}

        <div>
          {stargazers.repo.map((user, i) =>
            <GithubStargazersUser key={i} user={user} />
          )}
        </div>
      </div>
    )
  }
}
