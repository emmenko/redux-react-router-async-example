// TODO: move to constants and use symbols
const FETCH_USER = 'FETCH_USER'
const FETCH_REPO = 'FETCH_REPO'
const FETCH_USER_STARGAZERS = 'FETCH_USER_STARGAZERS'
const FETCH_REPO_STARGAZERS = 'FETCH_REPO_STARGAZERS'

const initialState = {
  user: {},
  repo: {},
  stargazers: {
    user: [],
    repo: []
  }
}

const actionsMap = {
  [FETCH_USER]: (state, action) => ({ user: action.user }),
  [FETCH_REPO]: (state, action) => ({ repo: action.repo }),
  [FETCH_USER_STARGAZERS]: (state, action) => (
    {
      stargazers: Object.assign({}, state.stargazers, {
        user: action.stargazers
      })
    }),
  [FETCH_REPO_STARGAZERS]: (state, action) => (
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
