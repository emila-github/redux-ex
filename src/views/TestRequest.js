import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getList } from '../actions/testRequest'
function TestRequest(props) {
  console.log('TestRequest page', props)
  let { dispatch } = props
  useEffect(() => {
    dispatch(getList())
  }, [dispatch])

  return (
    <ul>
      {props.list.length &&
        props.list.map((item, index) => <li key={index}>{item.data.title}</li>)}
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    list: state.testReuqest
  }
}
export default connect(mapStateToProps)(TestRequest)
