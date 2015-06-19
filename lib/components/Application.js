import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default class About extends React.Component {

  static propTypes = {
    children: PropTypes.any
  }

  render () {
    return (
      <div id="layout">
        <div id="menu">
          <div className="pure-menu">
            <Link to="/" className="pure-menu-heading">Redux</Link>
            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <Link to="/github" className="pure-menu-link">Github</Link>
              </li>
              <li className="pure-menu-item">
                <Link to="/about" className="pure-menu-link">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="main">
          {/* this will render the child routes */}
          {this.props.children}
        </div>
      </div>
    )
  }
}
