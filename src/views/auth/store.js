import { login } from '../../services/auth'

const state = {
  user: {},
  token: true,
  response: ''
}
const getters = {
  getAuth (state) {
    return state.token
  },
  getAuthTest (state) {
    return state.response
  }
}
const actions = {
  async authTestAction ({ commit }) {
    const res = await login()
    if (res) {
      commit('authTestMutation', 'HEllo')
    } else {
      return
    }
  }
}
const mutations = {
  authTestMutation (state, payload) {
    state.response = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
