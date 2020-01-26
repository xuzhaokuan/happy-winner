import axios from 'axios'

const service = axios.create({})


export function get(url, params) {
    return service.get(url, { params })
  }
  
  export function post(url, data) {
    return service.post(url, data)
  }
  
  export function put(url, data) {
    return service.put(url, data)
  }
  
  export function del(url) {
    return service.delete(url)
  }
  
  export default service