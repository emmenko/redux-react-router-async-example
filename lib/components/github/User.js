import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { fetchOnUpdate } from '../../decorators'
import StargazersRepo from './StargazersRepo'
import Pagination from './Pagination'

class User extends React.Component {

  static propTypes = {
    actions: PropTypes.object,
    github: PropTypes.object
  };

  render () {
    const { github: { user, stargazers } } = this.props
    const { pagination } = stargazers

    return (
      <div>
        {this.renderUser(user)}

        <div className="content">
          <Pagination
            pagination={pagination}
            onPagination={this.props.actions.fetchUserStargazers} />
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
}

export default fetchOnUpdate(['username'], (params, actions) => {
  const { username } = params
  actions.fetchUser({ username })
  actions.fetchUserStargazers({ username })
})(User)
