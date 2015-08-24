import * as constants from '../constants'

export function logIn (token) {
  return {
    type: constants.LOGGED_IN,
    payload: { token }
  }
}
