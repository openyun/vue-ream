import axios from 'axios'
const api = axios.create({
  baseURL: 'http://localhost:4000/api',
  transformRequest(data) {
    // 请求发送前处理
    return data
  },
  transformResponse(data) {
    // 请求返回统一处理
    try {
      data = JSON.parse(data)
      return data
    } catch (err) {
      console.log(err)
    }
  }
})
export default api
