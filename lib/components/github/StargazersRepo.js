import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default class StargazersRepo extends React.Component {

  static propTypes = {
    repo: PropTypes.object.isRequired
  };

  render () {
    const { repo } = this.props
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
            {/* FIXME: it seems that the correct field `subscribers_count`
                is missing from the API response */}
            {/*<p><i className="fa fa-eye"></i> {repo.subscribers_count}</p>*/}
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
        </div>
      </div>
    )
  }
}
