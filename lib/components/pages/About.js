import React from 'react'
import { Link } from 'react-router'

export default class About extends React.Component {
  render () {
    return (
      <div>
        <div className="header">
          <h1>About</h1>
        </div>
        <div className="content">
          <p>
            A special thanks to
            {' '}
            <Link to="/stargazers/gaearon"><code>@gaearon</code></Link>
            {' '}
            for kicking out the idea of <code>Redux</code>!
          </p>

          <h2>Technologies</h2>
          <p>
            This website is a showcase of different technologies such as:
            <ul>
              <li>
                <a href="https://github.com/facebook/react" target="_blank">
                  React.js
                </a>
              </li>
              <li>
                <a href="https://github.com/gaearon/redux" target="_blank">
                  Redux
                </a>
              </li>
              <li>
                <a href="https://github.com/rackt/react-router" target="_blank">
                  React Router
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    )
  }
}
