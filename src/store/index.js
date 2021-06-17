import Vue from 'vue'
import Vuex from 'vuex'
import navigation from '../components/navigation/store'
import auth from '../views/auth/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    navigation,
    auth
  }
})
