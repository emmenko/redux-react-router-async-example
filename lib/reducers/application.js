import * as constants from '../constants'
import createReducer from '../utils/create-reducer'

const initialState = {
  token: null,
  user: {
    // TODO: have a checkbox to update the state
    // e.g.: on the login page and/or menu
    // permissions: ['manage_account']
    permissions: []
  }
}

const actionHandlers = {
  [constants.LOGGED_IN]: (_, action) => action.payload,
  [constants.LOG_OUT]: () => ({ token: null })
}

export default createReducer(initialState, actionHandlers)
