import 'whatwg-fetch'

const GITHUB_API = 'https://api.github.com'

export function fetchUser (username) {
  return dispatch => {
    // TODO: handle errors
    fetch(`${GITHUB_API}/users/${username}`)
    .then(res => res.json())
    .then(res => dispatch({
      type: 'FETCH_USER',
      user: res
    }))
  }
}

export function fetchRepo () {
  return {
    type: 'FETCH_REPO',
    repo: 'bar'
  }
}
