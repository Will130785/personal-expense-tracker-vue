import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/auth/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import Groceries from '../views/Groceries.vue'
import HomeShopping from '../views/HomeShopping.vue'
import Social from '../views/Social.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/groceries',
    name: 'Groceries',
    component: Groceries
  },
  {
    path: '/home-shopping',
    name: 'HomeShopping',
    component: HomeShopping
  },
  {
    path: '/social',
    name: 'Social',
    component: Social
  }
]

const router = new VueRouter({
  routes
})

export default router
