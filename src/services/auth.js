import { apiClient } from './api'

const login = async data => {
  try {
    const result = await apiClient.post('/login', data)
    if (result.data.success) {
      const resData = {
        token: result.data.token,
        user: result.data.user,
        msg: result.data.msg
      }
      // Store the token and user in local storage
      localStorage.setItem('token', resData.token)
      localStorage.setItem('user', JSON.stringify(resData.user))
      // Set axios defaults
      // axios.defaults.headers.common['Authorization'] = resData.token
      return resData
    } else {
      return result.data
    }
  } catch (err) {
    return err
  }
}

const register = async data => {
  try {
    const result = await apiClient.post('/register', data)
    console.log(result)
    if (result.data.success) {
      return result.data
    } else {
      return result.data.msg
    }
  } catch (err) {
    return err
  }
}

export {
  login,
  register
}
