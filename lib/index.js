import React from 'react'

class Application extends React.Component {
  render () {
    return (
      <h1>Hello world!</h1>
    )
  }
}

React.render(<Application />, document.getElementById('app'))
