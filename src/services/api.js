import axios from 'axios'
import NProgress from 'nprogress'
const { VUE_APP_API } = process.env

const apiClient = axios.create({
  baseURL: VUE_APP_API,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
// NOTE - If making multiple api calls at once, we will need to handle this
apiClient.interceptors.request.use(config => {
  NProgress.start()
  // Set authorization headers on apiclient
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
})

apiClient.interceptors.response.use(response => {
  NProgress.done()
  return response
})

export {
  apiClient
}
