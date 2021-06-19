import axios from 'axios'
const { VUE_APP_API } = process.env

const apiClient = () => {
  return axios.create({
    baseURL: VUE_APP_API,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

export {
  apiClient
}
