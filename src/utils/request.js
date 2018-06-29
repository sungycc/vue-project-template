import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 8000,
  withCredentials: true // 跨域后台拿不到cookie，后台需要在响应头加上crossDomain: true
})

service.interceptors.request.use(config => {
  return config
}, error => {
  // console.log(error)
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      if (response.data.status === 401) {
        window.location.href = window.location.href.replace(/\/#\/[\s\S]*$/, '/#/login')
        // debugger
        return
      }
      return response.data
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    console.log('err---', error)
    // if (error.message === 'Network Error') {
    //   console.log('网络错误')
    //   return
    // }
    return Promise.reject(error)
  }
)

export default service
