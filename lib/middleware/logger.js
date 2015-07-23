export default function loggerMiddleware ({ getState }) {
  return next => action => {
    console.log('action', action)
    console.log('state', getState())
    next(action)
  }
}
