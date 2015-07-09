import React, { PropTypes } from 'react'
import { Forbidden } from '../components'

export default function secure (scope) {

  return DecoratedComponent =>
  class SecureDecorator extends React.Component {

    static contextTypes = {
      redux: PropTypes.any
    }

    render () {
      const { redux } = this.context
      const { application: { user } } = redux.getState()

      if (user.permissions.some(s => s === scope))
        return <DecoratedComponent {...this.props} />
      else
        return <Forbidden />
    }
  }
}
