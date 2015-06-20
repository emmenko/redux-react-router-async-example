import 'whatwg-fetch'
import parseLinkHeader from 'parse-link-header'
import * as constants from '../constants'

const GITHUB_API = 'https://api.github.com'

export function fetchUser (options) {
  const { username } = options

  return dispatch => {
    // TODO: handle errors
    fetch(`${GITHUB_API}/users/${username}`)
    .then(res => res.json())
    .then(res => dispatch({
      type: constants.FETCH_USER,
      user: res
    }))
  }
}

export function fetchUserStargazers (options) {
  const { page, username } = options
  const url = page ? page :
    `${GITHUB_API}/users/${username}/starred`

  return dispatch => {
    // TODO: handle errors
    fetch(url)
    .then(res => {
      const pagination = parseLinkHeader(res.headers.get('link'))
      res.json().then(result => dispatch({
        type: constants.FETCH_USER_STARGAZERS,
        stargazers: result,
        pagination
      }))
    })
  }
}

export function fetchRepo (options) {
  const { username, repo } = options

  return dispatch => {
    // TODO: handle errors
    fetch(`${GITHUB_API}/repos/${username}/${repo}`)
    .then(res => res.json())
    .then(res => dispatch({
      type: constants.FETCH_REPO,
      repo: res
    }))
  }
}

export function fetchRepoStargazers (options) {
  const { page, username, repo } = options
  const url = page ? page :
    `${GITHUB_API}/repos/${username}/${repo}/stargazers`

  return dispatch => {
    // TODO: handle errors
    fetch(url)
    .then(res => {
      const pagination = parseLinkHeader(res.headers.get('link'))
      res.json().then(result => dispatch({
        type: constants.FETCH_REPO_STARGAZERS,
        stargazers: result,
        pagination
      }))
    })
  }
}
