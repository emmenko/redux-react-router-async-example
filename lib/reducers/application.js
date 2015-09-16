import * as constants from '../constants'
import createReducer from '../utils/create-reducer'

const initialState = {
  token: null,
  locale: 'en',
  user: {
    // TODO: have a checkbox to update the state
    // e.g.: on the login page and/or menu
    // permissions: ['manage_account']
    permissions: []
  }
}

const actionHandlers = {
  [constants.LOGGED_IN]: (_, action) => action.payload,
  [constants.LOG_OUT]: () => ({ token: null }),
  [constants.LOCALE_SWITCHED]: (_, action) => ({ locale: action.payload })
}

export default createReducer(initialState, actionHandlers)
