import * as constants from '../constants'
import reducerCreator from './reducerCreator'

import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  user: {},
  repo: {},
  stargazers: {
    user: [],
    repo: [],
    pagination: {}
  }
})

const actionsHandlers = {
  [constants.FETCH_USER]: (state, action) => state.set(
    'user',
    Immutable.fromJS(action.payload.user)
  ),
  [constants.FETCH_REPO]: (state, action) => state.set(
    'repo',
    Immutable.fromJS(action.payload.repo)
  ),
  [constants.FETCH_USER_STARGAZERS]: (state, action) => state.mergeIn(
    ['stargazers'],
    {
      user: action.payload.stargazers,
      pagination: action.payload.pagination
    }
  ),
  [constants.FETCH_REPO_STARGAZERS]: (state, action) => state.mergeIn(
    ['stargazers'],
    {
      repo: action.payload.stargazers,
      pagination: action.payload.pagination
    }
  )
}

export default reducerCreator(initialState, actionsHandlers)
