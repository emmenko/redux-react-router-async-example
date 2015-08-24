import React from 'react'
import { secure } from '../../decorators'

@secure('manage_account')
export default class SuperSecretArea extends React.Component {
  render () {
    return (
      <div>
        <div className="header">
          <h1>SuperSecretArea</h1>
        </div>
        <div className="content">
          <p>This is a restricted area.</p>
        </div>
      </div>
    )
  }
}
