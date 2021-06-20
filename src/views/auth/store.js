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
  authState: state => state.status
}
const actions = {
  async loginAction ({ commit }, userData) {
    commit('authRequest')
    const res = await login(userData)
    console.log('******', await res)
    if (res.token) {
      commit('loginMutation', res)
      router.push('/dashboard')
    } else {
      commit('loginFailure', res.msg)
    }
  },
  async registerAction ({ commit }, userData) {
    const res = await register(userData)
    if (res && res.success) {
      console.log(res)
      commit('registerMutation')
    } else {
      commit('registerFailure', res)
    }
  },
  async logout ({ commit }) {
    try {
      await localStorage.clear()
      commit('logout')
      delete axios.defaults.headers.common['Authorization']
      router.push('/login')
      return
    } catch (err) {
      commit('logoutFailure', err)
    }
  }
}
const mutations = {
  loginMutation (state, payload) {
    state.user = payload.user
    state.token = payload.token
    state.status = 'success'
    state.message = payload.msg
  },
  loginFailure (state, payload) {
    state.status = 'failed'
    state.message = payload
  },
  registerMutation (state, payload) {
    state.registeredUser = payload
  },
  registerFailure (state, payload) {
    state.status = 'failed'
    state.message = payload
  },
  authRequest (state) {
    state.status = 'loading'
  },
  logout (state) {
    state.status = '',
    state.token = '',
    state.user = ''
  },
  logoutFailure (state, err) {
    state.error = err
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
