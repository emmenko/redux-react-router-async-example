import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const GITHUB_REPO =
  'https://github.com/emmenko/redux-react-router-async-example'

export default class Menu extends React.Component {

  static propTypes = {
    activeClass: PropTypes.string.isRequired
  }

  render () {
    return (
      <div id="menu" ref="menu" className={this.props.activeClass}>
        <div className="pure-menu">
          <Link to="/" className="pure-menu-heading">Redux</Link>

          <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <Link to="/stargazers/emmenko" className="pure-menu-link">
                <i className="fa fa-star"></i> Stargazers
              </Link>
            </li>
            <li className="pure-menu-item">
              <Link to="/about" className="pure-menu-link">
                <i className="fa fa-dot-circle-o"></i> About
              </Link>
            </li>
            <li className="pure-menu-item">
              <a href={GITHUB_REPO} target="_blank"
                className="pure-menu-link">
                <i className="fa fa-github"></i> Fork me
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
