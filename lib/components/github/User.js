import React, { PropTypes } from 'react'
import { fetchOnUpdate } from '../decorators'
import StargazersRepo from './StargazersRepo'
import StargazersUser from './StargazersUser'

@fetchOnUpdate(['username'], (params, actions) => {
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
        <div className="content">
          <StargazersUser user={user} />
        </div>

        <div className="stargazers">
          <div className="pure-g">
            {stargazers.user.map((repo, i) =>
              <div key={i}
                className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4 pure-u-xl-1-6">
                <StargazersRepo repo={repo} />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
