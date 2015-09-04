import * as constants from '../constants'

export function login (form, history, nextPath) {
  return dispatch => {
    // simulate request
    setTimeout(() => {
      const token = Math.random().toString(36).substring(7)
      dispatch({
        type: constants.LOGGED_IN,
        payload: { token }
      })
      // redirect to a secure page
      history.pushState({}, nextPath)
    }, 300)
  }
}
