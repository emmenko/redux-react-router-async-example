import React from 'react'

export default class Forbidden extends React.Component {
  render () {
    return (
      <div>
        <div className="header">
          <h1>Forbidden</h1>
        </div>
        <div className="content">
          <p>
            {/* TODO: get some info about the error */}
            You are not authorized to see the XXX page
          </p>
        </div>
      </div>
    )
  }
}
