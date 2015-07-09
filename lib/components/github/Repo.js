import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Immutable from 'immutable'

import { fetchOnUpdate } from '../../decorators'
import StargazersUser from './StargazersUser'
import Pagination from './Pagination'

@fetchOnUpdate([ 'username', 'repo' ], (params, actions) => {
  const { username, repo } = params
  actions.fetchRepo({ username, repo })
  actions.fetchRepoStargazers({ username, repo })
})
export default class Repo extends React.Component {

  static propTypes = {
    actions: PropTypes.object,
    github: PropTypes.instanceOf(Immutable.Map).isRequired
  }

  render () {
    const repo = this.props.github.get('repo').toJS()

    const stargazers = this.props.github.get('stargazers')
    const pagination = stargazers.get('pagination')

    return (
      <div>
        <div className="content">
          <div className="section-repo">
            {repo.owner && this.renderRepo(repo)}
          </div>
        </div>

        <div className="content">
          <Pagination
            pagination={pagination}
            onPagination={this.props.actions.fetchRepoStargazers} />
        </div>

        <div className="stargazers">
          <div className="pure-g">
            {stargazers.get('repo').map(user =>
              <div key={user.get('login')}
                className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4 pure-u-xl-1-6">
                <StargazersUser user={user} />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  renderRepo (repo) {
    const { owner } = repo

    return (
      <div className="l-box">
        <div className="l-box-top">
          <Link to={`/stargazers/${owner.login}`}
            title={owner.login}>
            <img
              src={owner.avatar_url}
              width="72"
              height="72"
              style={{ borderRadius: '100px' }} />
          </Link>
          <div className="repo-info">
            <p><i className="fa fa-star"></i> {repo.stargazers_count}</p>
            <p><i className="fa fa-eye"></i> {repo.watchers_count}</p>
          </div>
        </div>
        <div>
          <Link to={`/stargazers/${owner.login}/${repo.name}`}
            title={repo.description}
            style={{ textDecoration: 'none', color: '#888' }}>
            <div className="ellipsis">
              <i className="fa fa-angle-double-right"></i>
              {' ' + repo.name}
            </div>
          </Link>
          <small>{repo.description}</small>
          <p className="link">
            <a href={repo.html_url} target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    )
  }
}
