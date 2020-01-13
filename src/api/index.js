import request from './request'
// const host = './api/v1'

export function getTestRequest({ subreddit = 'reactjs' } = {}) {
  return request({
    url: `https://www.reddit.com/r/${subreddit}.json`,
    method: 'get'
  })
}
