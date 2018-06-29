/*
 *  登录api
 */
import request from '@/utils/request'

function login (data) {
  return request({
    headers: {
      // 'x-requested-with': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: 'user/login',
    method: 'post',
    data,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }]
  })
}

export default {
  login
}
