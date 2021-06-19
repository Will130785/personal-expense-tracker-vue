import { apiClient } from './api'

const login = async () => {
  try {
    const result = await apiClient().get('/login')
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
