import * as constants from '../constants'
import createReducer from '../utils/create-reducer'

const initialState = {
  user: {},
  repo: {},
  stargazers: {
    user: [],
    repo: [],
    pagination: {}
  }
}

const actionHandlers = {
  [constants.FETCH_USER]: (state, action) => ({ user: action.user }),
  [constants.FETCH_REPO]: (state, action) => ({ repo: action.repo }),
  [constants.FETCH_USER_STARGAZERS]: (state, action) => (
    {
      stargazers: Object.assign({}, state.stargazers, {
        user: action.stargazers,
        pagination: action.pagination
      })
    }),
  [constants.FETCH_REPO_STARGAZERS]: (state, action) => (
    {
      stargazers: Object.assign({}, state.stargazers, {
        repo: action.stargazers,
        pagination: action.pagination
      })
    })
}

export default createReducer(initialState, actionHandlers)
