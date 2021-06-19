import { login } from '../../services/auth'

const state = {
  user: {},
  token: '',
  response: ''
}
const getters = {
  getAuth (state) {
    return state.token
  },
  // getAuthTest (state) {
  //   return state.response
  // }
  getUser (state) {
    return state.user
  }
}
const actions = {
  async loginAction ({ commit }, userData) {
    const res = await login(userData)
    if (res) {
      console.log('*****', res)
      commit('loginMutation', res.data)
    } else {
      return
    }
  }
}
const mutations = {
  loginMutation (state, payload) {
    state.user = payload.user
    state.token = payload.token
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
