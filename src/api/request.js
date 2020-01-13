import axios from 'axios'

axios.defaults.timeout = 6000

export default function(options) {
  return new Promise((resolve, reject) => {
    axios(options)
      .then(res => {
        console.log('axios todo', options, res)
        if (res.status >= 200 && res.status < 300) {
          return resolve(res.data)
        }

        return reject(res.data)
      })
      .catch(err => {
        if (!err.status) {
          reject({
            msg: '网络错误'
          })
        } else {
          reject({
            msg: '发生了奇怪的错误'
          })
        }
      })
  })
}
