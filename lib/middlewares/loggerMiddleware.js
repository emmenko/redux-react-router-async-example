export default function loggerMiddleware () {
  return (next) => (action) => {
    console.log('* action performed', action)
    next(action)
  }
}
