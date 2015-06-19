import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default class StargazersRepo extends React.Component {

  static propTypes = {
    repo: PropTypes.object.isRequired
  }

  render () {
    const { repo } = this.props
    const { owner } = repo

    return (
      <div>
        <div>
          <Link to={`/github/${owner.login}`}
            title={owner.login}>
            <img
              src={owner.avatar_url}
              width="36"
              height="36"
              style={{ borderRadius: '50px' }} />
          </Link>
        </div>
        <div>
          <Link to={`/github/${owner.login}/${repo.name}`}
            title={repo.description}>
            {repo.name}
          </Link>
        </div>
      </div>
    )
  }
}
