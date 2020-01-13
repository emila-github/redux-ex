export default (state = [], action) => {
  switch (action.type) {
    case 'GET_TEST_REQUEST':
      let {
        data: { children }
      } = action.data
      return children
    default:
      return state
  }
}
