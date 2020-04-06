import axios from 'ts-axios-new'

// const urlMap = {
//   development: '/',
//   production: ''
// }
// const baseUrl = 'http://ustbhuangyi.com/sell/'
const ERR_OK = 0

export function get(url) {
  return function (params = {}) {
    // return axios.get(baseUrl + url, {
    return axios.get(url, {
      params
    }).then((res) => {
      const { code, data } = res.data
      if (code === ERR_OK) {
        return data
      }
    }).catch((e) => {
    })
  }
}
