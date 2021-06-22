import { login, register } from '../../services/auth'
import router from '../../router'
import axios from 'axios'

const state = {
  user: {},
  token: localStorage.getItem('token') || '',
  registeredUser: {},
  status: '',
  error: '',
  message: ''
}
const getters = {
  // getAuth (state) {
  //   return state.token
  // },
  // getAuthTest (state) {
  //   return state.response
  // }
  getUser (state) {
    return state.user
  },
  isLoggedIn: state => !!state.token,
  authState: state => state.status,
  getMessage (state) {
    return state.message
  }
}
const actions = {
  async loginAction ({ commit, dispatch }, userData) {
    commit('authRequest')
    const res = await login(userData)
    console.log('******', await res)
    if (res.token) {
      commit('loginMutation', res)
      dispatch('flashMessageAction', res.msg)
      router.push('/dashboard')
    } else {
      commit('loginFailure')
      dispatch('flashMessageAction', res.msg)
    }
  },
  async registerAction ({ commit, dispatch }, userData) {
    const res = await register(userData)
    if (res && res.success) {
      console.log(res)
      commit('registerMutation', res)
      dispatch('flashMessageAction', res.msg)
      return res
    } else {
      commit('registerFailure')
      dispatch('flashMessageAction', res)
    }
  },
  async logout ({ commit, dispatch }) {
    try {
      await localStorage.clear()
      commit('logout')
      dispatch('flashMessageAction', 'You have been logged out')
      delete axios.defaults.headers.common['Authorization']
      router.push('/login')
      return
    } catch (err) {
      commit('logoutFailure', err)
      dispatch('flashMessageAction', 'There was an error logging you out!')
    }
  },
  flashMessageAction ({ commit }, message) {
    console.log(message)
    commit('flashMessageMutation', message)
  }
}
const mutations = {
  loginMutation (state, payload) {
    state.user = payload.user
    state.token = payload.token
    state.status = 'success'
  },
  loginFailure (state) {
    state.status = 'failed'
  },
  registerMutation (state, payload) {
    state.registeredUser = payload
  },
  registerFailure (state) {
    state.status = 'failed'
  },
  authRequest (state) {
    state.status = 'loading'
  },
  logout (state) {
    state.status = ''
    state.token = ''
    state.user = ''
  },
  logoutFailure (state, err) {
    state.error = err
  },
  flashMessageMutation (state, payload) {
    state.message = payload
    setTimeout(() => {
      state.message = ''
    }, 5000)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
