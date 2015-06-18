import * as constants from '../constants'

const initialState = {
  user: {},
  repo: {},
  stargazers: {
    user: [],
    repo: []
  }
}

const actionsMap = {
  [constants.FETCH_USER]: (state, action) => ({ user: action.user }),
  [constants.FETCH_REPO]: (state, action) => ({ repo: action.repo }),
  [constants.FETCH_USER_STARGAZERS]: (state, action) => (
    {
      stargazers: Object.assign({}, state.stargazers, {
        user: action.stargazers
      })
    }),
  [constants.FETCH_REPO_STARGAZERS]: (state, action) => (
    {
      stargazers: Object.assign({}, state.stargazers, {
        repo: action.stargazers
      })
    })
}

export default function github (state = initialState, action) {
  const reduceFn = actionsMap[action.type]
  if (!reduceFn) return state

  return Object.assign({}, state, reduceFn(state, action))
}
