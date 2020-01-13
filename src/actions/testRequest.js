import { getTestRequest } from '../api'
const GET_TEST_REQUEST = 'GET_TEST_REQUEST'

export const requestListAction = data => ({
  type: GET_TEST_REQUEST,
  data
})

export const getList = params => {
  return dispatch => {
    getTestRequest(params).then(res => {
      console.log(res)
      dispatch(requestListAction(res))
    })
  }
}
