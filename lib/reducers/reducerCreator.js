export default function reducerCreator (initialState, handlers) {
  return (state = initialState, action) => {
    const fn = handlers[action.type]

    if (!fn)
      return state

    return {
      ...state,
      ...fn(state, action)
    }
  }
}
