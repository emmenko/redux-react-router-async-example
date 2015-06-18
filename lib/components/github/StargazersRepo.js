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
        <h3>
          <Link to={`/github/${owner.login}/${repo.name}`}>
            {repo.name}
          </Link>
          {' by '}
          <Link to={`/github/${owner.login}`}>
            {owner.login}
          </Link>
        </h3>
        <p>{repo.description}</p>
      </div>
    )
  }
}
