import { combineReducers } from 'redux'
import counter from '../reducers/counter'
import testReuqest from '../reducers/testReuqest'

export default combineReducers({
  counter,
  testReuqest
})
