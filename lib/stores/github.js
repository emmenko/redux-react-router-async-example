const FETCH_USER = 'FETCH_USER'
const FETCH_REPO = 'FETCH_REPO'

const initialState = {
  user: 'emmenko',
  repo: 'redux-react-router-async-example'
}

export default function github (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return Object.assign({}, state, { user: action.user })
    case FETCH_REPO:
      return Object.assign({}, state, { repo: action.repo })
    default:
      return state
  }
}
