const state = {
  modal: ''
}

const getters = {
  getModal (state) {
    return state.modal
  }
}

const actions = {
  getModalAction ({ commit }, modal) {
    commit('getModalMutation', modal)
  }
}

const mutations = {
  getModalMutation (state, payload) {
    state.modal = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
