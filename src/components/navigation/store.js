const state = {
  sideBar: false
}

const getters = {
  getSidebarStatus (state) {
    return state.sideBar
  }
}

const actions = {
  updateSidebarStatusAction ({ commit }, data) {
    commit('updateSidebarStatusMutation', data)
  }
}

const mutations = {
  updateSidebarStatusMutation (state) {
    state.sideBar = !state.sideBar
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
