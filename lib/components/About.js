import React from 'react'

export default class About extends React.Component {
  render () {
    return (
      <div>
        <div className="header">
          <h1>About</h1>
        </div>
        <div className="content">
          <h2 style={{
            margin: '2em 0 1em 0',
            fontWeight: '300',
            color: '#888',
            position: 'relative'
          }}>Technologies</h2>
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
