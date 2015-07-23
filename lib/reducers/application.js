import * as constants from '../constants'

const initialState = {
  loggedIn: false,
  user: {
    // TODO: have a checkbox to update the state
    // e.g.: on the login page and/or menu
    // permissions: ['manage_account']
    permissions: []
  }
}

const actionsMap = {
  [constants.LOGGED_IN]: () => ({ loggedIn: true }),
  [constants.LOG_OUT]: () => ({ loggedIn: false })
}

export default function application (state = initialState, action) {
  const reduceFn = actionsMap[action.type]
  if (!reduceFn) return state

  return Object.assign({}, state, reduceFn(state, action))
}
