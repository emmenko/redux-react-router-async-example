import * as constants from '../constants'
import reducerCreator from './reducerCreator'

const initialState = {
  user: {},
  repo: {},
  stargazers: {
    user: [],
    repo: [],
    pagination: {}
  },
  error: {}
}

const actionsHandlers = {

  [constants.FETCH_USER]: (state, action) =>
    action.error ?
      { error: action.payload.error } :
      {
        user: action.payload.user,
        error: {}
      },

  [constants.FETCH_REPO]: (state, action) =>
    action.error ?
      { error: action.payload.error } :
      {
        repo: action.payload.repo,
        error: {}
      },

  [constants.FETCH_USER_STARGAZERS]: (state, action) =>
    action.error ?
      { error: action.payload.error } :
      {
        stargazers: {
          ...state.stargazers,
          user: action.payload.stargazers,
          pagination: action.payload.pagination
        },
        error: {}
      },

  [constants.FETCH_REPO_STARGAZERS]: (state, action) =>
    action.error ?
      { error: action.payload.error } :
      {
        stargazers: {
          ...state.stargazers,
          repo: action.payload.stargazers,
          pagination: action.payload.pagination
        },
        error: {}
      }
}

export default reducerCreator(initialState, actionsHandlers)
