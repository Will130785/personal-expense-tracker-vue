import { apiClient } from './api'

const login = async (data) => {
  try {
    const result = await apiClient().post('/login', data)
    if (result && result.data) {
      return result
    }
  } catch (err) {
    return null
  }
}

export {
  login
}
