import * as constants from '../constants'
import createReducer from '../utils/create-reducer'

const initialState = {
  loggedIn: false,
  user: {
    // TODO: have a checkbox to update the state
    // e.g.: on the login page and/or menu
    // permissions: ['manage_account']
    permissions: []
  }
}

const actionHandlers = {
  [constants.LOGGED_IN]: () => ({ loggedIn: true }),
  [constants.LOG_OUT]: () => ({ loggedIn: false })
}

export default createReducer(initialState, actionHandlers)
