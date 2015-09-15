import * as constants from '../constants'
import * as storage from './storage'

export default function persistenceHandler (next) {
  return (reducer, initialState) => {
    const store = next(reducer, initialState)

    return Object.assign({}, store, {
      dispatch (action) {
        store.dispatch(action)

        storage.put('locale', store.getState().application.locale)

        if (action.type === constants.LOGGED_IN)
          storage.put('token', action.payload.token)

        if (action.type === constants.LOG_OUT)
          storage.remove('token')

        return action
      }
    })
  }
}
