export default function reducerCreator (initialState, handlers) {
  return (state = initialState, action) =>
    handlers[action.type] ?
      handlers[action.type](state, action) :
      state
}
