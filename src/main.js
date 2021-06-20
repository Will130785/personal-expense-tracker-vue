import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

// Load token from local storage
Vue.prototype.$http = axios
const token = localStorage.getItem('token')

// If there is a token in local storage we will append default axios authorisation headers
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
