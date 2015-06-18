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

export function fetchUserStargazers (username) {
  return dispatch => {
    // TODO: handle errors
    fetch(`${GITHUB_API}/users/${username}/starred`)
    .then(res => res.json())
    .then(res => dispatch({
      type: 'FETCH_USER_STARGAZERS',
      stargazers: res
    }))
  }
}

export function fetchRepo (username, repo) {
  return dispatch => {
    // TODO: handle errors
    fetch(`${GITHUB_API}/repos/${username}/${repo}`)
    .then(res => res.json())
    .then(res => dispatch({
      type: 'FETCH_REPO',
      repo: res
    }))
  }
}

export function fetchRepoStargazers (username, repo) {
  return dispatch => {
    // TODO: handle errors
    fetch(`${GITHUB_API}/repos/${username}/${repo}/stargazers`)
    .then(res => res.json())
    .then(res => dispatch({
      type: 'FETCH_REPO_STARGAZERS',
      stargazers: res
    }))
  }
}
