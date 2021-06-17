const state = {
  test: 'Hello this is a test'
}

const getters = {
  getTest (state) {
    return state.test
  }
}

const actions = {
  updateTestAction ({ commit }, data) {
    commit('updateTestMutation', data)
  }
}

const mutations = {
  updateTestMutation (state, payload) {
    state.test = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
