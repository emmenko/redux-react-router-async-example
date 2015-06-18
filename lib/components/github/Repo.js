import React, { PropTypes } from 'react'
import { fetchOnUpdate } from '../decorators'
import StargazersRepo from './StargazersRepo'
import StargazersUser from './StargazersUser'

@fetchOnUpdate([ 'username', 'repo' ], (params, actions) => {
  actions.fetchRepo(params.username, params.repo)
  actions.fetchRepoStargazers(params.username, params.repo)
})
export default class Repo extends React.Component {

  static propTypes = {
    actions: PropTypes.object,
    github: PropTypes.object
  }

  render () {
    const { repo, stargazers } = this.props.github

    return (
      <div>
        {repo.owner && <StargazersRepo repo={repo} />}

        <div>
          {stargazers.repo.map((user, i) =>
            <StargazersUser key={i} user={user} />
          )}
        </div>
      </div>
    )
  }
}
