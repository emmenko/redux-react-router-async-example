import 'whatwg-fetch'
import parseLinkHeader from 'parse-link-header'
import * as constants from '../constants'

const GITHUB_API = 'https://api.github.com'

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300)
    return response

  let error = new Error(response.statusText)
  error.response = response
  throw error
}

export function fetchUser (options) {
  const { username } = options
  const url = `${GITHUB_API}/users/${username}`

  return dispatch => {
    fetch(url)
    .then(checkStatus)
    .then(res => res.json())
    .then(res => dispatch({
      type: constants.FETCH_USER,
      payload: {
        user: res
      }
    }))
    .catch((error) => {
      // TODO: better error handling
      console.log('* request failed', error)
    })
  }
}

export function fetchUserStargazers (options) {
  const { page, username } = options
  const url = page ? page :
    `${GITHUB_API}/users/${username}/starred`

  return dispatch => {
    fetch(url)
    .then(checkStatus)
    .then(res => {
      const pagination = parseLinkHeader(res.headers.get('link'))
      res.json().then(result => dispatch({
        type: constants.FETCH_USER_STARGAZERS,
        payload: {
          stargazers: result,
          pagination
        }
      }))
    })
    .catch((error) => {
      // TODO: better error handling
      console.log('* request failed', error)
    })
  }
}

export function fetchRepo (options) {
  const { username, repo } = options
  const url = `${GITHUB_API}/repos/${username}/${repo}`

  return dispatch => {
    fetch(url)
    .then(checkStatus)
    .then(res => res.json())
    .then(res => dispatch({
      type: constants.FETCH_REPO,
      payload: {
        repo: res
      }
    }))
    .catch((error) => {
      // TODO: better error handling
      console.log('* request failed', error)
    })
  }
}

export function fetchRepoStargazers (options) {
  const { page, username, repo } = options
  const url = page ? page :
    `${GITHUB_API}/repos/${username}/${repo}/stargazers`

  return dispatch => {
    fetch(url)
    .then(checkStatus)
    .then(res => {
      const pagination = parseLinkHeader(res.headers.get('link'))
      res.json().then(result => dispatch({
        type: constants.FETCH_REPO_STARGAZERS,
        payload: {
          stargazers: result,
          pagination
        }
      }))
    })
    .catch((error) => {
      // TODO: better error handling
      console.log('* request failed', error)
    })
  }
}
