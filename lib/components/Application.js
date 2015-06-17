import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default class About extends React.Component {

  static propTypes = {
    children: PropTypes.any
  }

  render () {
    return (
      <div>
        <h1>Hello World!</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        {/* this will render the child routes */}
        {this.props.children}
      </div>
    )
  }
}
