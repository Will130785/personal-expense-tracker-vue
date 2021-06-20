import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/auth/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import Groceries from '../views/Groceries.vue'
import HomeShopping from '../views/HomeShopping.vue'
import Social from '../views/Social.vue'
import Register from '../views/auth/Register.vue'
import store from '../store/index'
import NProgress from 'nprogress'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/logout',
    redirect: '/login'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/groceries',
    name: 'Groceries',
    component: Groceries,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/home-shopping',
    name: 'HomeShopping',
    component: HomeShopping,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/social',
    name: 'Social',
    component: Social,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      // Go to login page
      // NProgress.done()
      next('/login')
    } else {
      // NProgress.done()
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    NProgress.start()
    if (store.getters.isLoggedIn) {
      next('/dashboard')
    } else {
      next()
    }
  }
  router.afterEach(() => {
    NProgress.done()
  })
})

export default router
