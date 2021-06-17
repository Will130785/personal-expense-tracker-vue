const state = {
  user: {},
  token: true
}
const getters = {
  getAuth (state) {
    return state.token
  }
}
const actions = {}
const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
