import React, { Component } from 'react'
import { increment, decrement } from '../store/actions'
import { connect } from 'react-redux'

class Counter extends Component {
  constructor(props) {
    super(props)
    // this.handerIncrement = this.handerIncrement.bind(this)

    this.state = {}
  }
  // handerIncrement() {
  //   const { dispatch } = this.props
  //   dispatch(increment())
  //   console.log('todo handerIncrement')
  // }
  render() {
    console.log('render this.props=', this.props)
    // let { dispatch } = this.props
    return (
      <div>
        {this.props.count}
        {/* <button onClick={this.handerIncrement}>+1</button> */}
        {/* <button onClick={() => dispatch(decrement())}>-1</button> */}
        <button onClick={this.props.dispatchIncrement}>+10</button>
        <button onClick={this.props.dispatchDecrement}>-2</button>
      </div>
    )
  }
}

const mapStateTpProps = state => {
  console.log('mapStateTpProps', state)
  return {
    count: state.counter
  }
}

// 将dispatch映射到props上 ，映射后props中的dispathc方法就无效了
const mapDispatchToProps = dispatch => {
  return {
    dispatchDecrement(e) {
      dispatch({
        type: 'DECREMENT',
        value: 2
      })
    },
    dispatchIncrement(e) {
      dispatch(increment(10))
    }
  }
}

export default connect(mapStateTpProps, mapDispatchToProps)(Counter)
