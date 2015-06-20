import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import { fetchOnUpdate } from '../../decorators'
import StargazersRepo from './StargazersRepo'

@fetchOnUpdate(['username'], (params, actions) => {
  const { username } = params
  actions.fetchUser({ username })
  actions.fetchUserStargazers({ username })
})
export default class User extends React.Component {

  static propTypes = {
    actions: PropTypes.object,
    github: PropTypes.object
  }

  handlePaginationClick (link) {
    const page = link.url
    this.props.actions.fetchUserStargazers({ page })
  }

  render () {
    const { user, stargazers } = this.props.github
    const { pagination } = stargazers

    return (
      <div>
        {this.renderUser(user)}

        <div className="content">
          {this.renderPagination(pagination)}
        </div>

        <div className="stargazers">
          <div className="pure-g">
            {stargazers.user.map(repo =>
              <div key={repo.full_name}
                className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4 pure-u-xl-1-6">
                <StargazersRepo repo={repo} />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  renderUser (user) {
    return (
      <div className="content">
        <div className="section-user">
          <Link to={`/stargazers/${user.login}`}>
            <img src={user.avatar_url} width='144' height='144'
              style={{ borderRadius: '200px' }} />
            <p>
              {user.login}
              {' '}
              <small>{user.name && <span>({user.name})</span>}</small>
            </p>
          </Link>
          <p className="link">
            <a href={user.html_url} target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    )
  }

  renderPagination (pagination) {
    const iconMap = {
      first: 'fa fa-fast-backward',
      prev: 'fa fa-backward',
      next: 'fa fa-forward',
      last: 'fa fa-fast-forward'
    }

    return (
      <div className="pagination">
        <ul>
          {[ 'first', 'prev', 'next', 'last' ].map((key, i) =>
            <li key={i}>
            {pagination[key] ?
              <span onClick={this.handlePaginationClick.bind(
                this, pagination[key])}>
                <i className={iconMap[key]}></i>
              </span>
              : <span className={classnames(iconMap[key], 'disabled')}></span>
            }
            </li>
          )}
        </ul>
      </div>
    )
  }
}
