import React from 'react'
import { secure } from '../../decorators'

@secure('manage_account')
export default class Account extends React.Component {
  render () {
    return (
      <div>
        <div className="header">
          <h1>Account</h1>
        </div>
        <div className="content">
          <p>Hello</p>
        </div>
      </div>
    )
  }
}
