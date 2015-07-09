export default function loggerMiddleware (next) {
  return action => {
    console.log('* action performed', action)
    next(action)
  }
}
