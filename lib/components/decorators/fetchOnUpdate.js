import React, { PropTypes } from 'react'
import shallowEqualScalar from 'redux/lib/utils/shallowEqualScalar'

function mapParams (paramKeys, params) {
  return paramKeys.reduce((acc, key) => {
    return Object.assign({}, acc, { [key]: params[key] })
  }, {})
}

export default function fetchOnUpdate (paramKeys, fn) {

  return DecoratedComponent =>
  class FetchOnUpdateDecorator extends React.Component {

    static propTypes = {
      actions: PropTypes.object.isRequired
    }

    componentWillMount () {
      fn(mapParams(paramKeys, this.props.params), this.props.actions)
    }

    componentDidUpdate (prevProps) {
      const params = mapParams(paramKeys, this.props.params)
      const prevParams = mapParams(paramKeys, prevProps.params)

      if (!shallowEqualScalar(params, prevParams))
        fn(params, this.props.actions)
    }

    render () {
      return (
        <DecoratedComponent {...this.props} />
      )
    }
  }
}
