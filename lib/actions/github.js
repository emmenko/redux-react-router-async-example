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

export function fetchUser ({ username }) {
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
    .catch(error => {
      console.log('* request failed', error)

      dispatch({
        type: constants.FETCH_USER,
        error: true,
        payload: {
          error: {
            username,
            status: error.response.status,
            statusText: error.response.statusText
          }
        }
      })
    })
  }
}

export function fetchUserStargazers ({ page, username }) {
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
          pagination: pagination
        }
      }))
    })
    .catch(error => {
      console.log('* request failed', error)

      dispatch({
        type: constants.FETCH_USER_STARGAZERS,
        error: true,
        payload: {
          error: {
            username,
            page,
            status: error.response.status,
            statusText: error.response.statusText
          }
        }
      })
    })
  }
}

export function fetchRepo ({ username, repo }) {
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
      console.log('* request failed', error)

      dispatch({
        type: constants.FETCH_REPO,
        error: true,
        payload: {
          error: {
            username,
            repo,
            status: error.response.status,
            statusText: error.response.statusText
          }
        }
      })
    })
  }
}

export function fetchRepoStargazers ({ page, username, repo }) {
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
          pagination: pagination
        }
      }))
    })
    .catch((error) => {
      console.log('* request failed', error)

      dispatch({
        type: constants.FETCH_REPO_STARGAZERS,
        error: true,
        payload: {
          error: {
            username: username,
            repo: repo,
            page: page,
            status: error.response.status,
            statusText: error.response.statusText
          }
        }
      })
    })
  }
}
