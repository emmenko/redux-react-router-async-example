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
        <div className="footer">
          <div className="pure-g">
            <div className="pure-u-1 u-sm-1-2">
              This site is built with {'<3'} using
              {' '}
              <a href="http://purecss.io/" target="_blank">PureCSS</a>
            </div>
            <div className="pure-u-1 u-sm-1-2">
              &copy; 2015
            </div>
          </div>
        </div>
      </div>
    )
  }
}
