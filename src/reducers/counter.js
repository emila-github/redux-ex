export default (state = 0, action) => {
  console.log('action', action, state)
  switch (action.type) {
    case 'INCREMENT':
      return state + action.value
    case 'DECREMENT':
      return state - action.value
    default:
      return state
  }
}
