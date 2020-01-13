const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
export const increment = (num = 1) => ({
  type: INCREMENT,
  value: num
})

export const decrement = (num = 1) => ({
  type: DECREMENT,
  value: num
})
