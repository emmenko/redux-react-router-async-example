export function fetchUser () {
  return {
    type: 'FETCH_USER',
    user: 'foo'
  }
}

export function fetchRepo () {
  return {
    type: 'FETCH_REPO',
    repo: 'bar'
  }
}
