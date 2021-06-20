<template>
  <nav class="topbar">
    <!-- For VUEX testing purposes -->
    <!-- <button @click="testMethod">Click me</button> -->
    <button v-show="isLoggedIn" class="sidebar-toggle" @click="toggleSidebar">Open</button>
    <button v-if="isLoggedIn" @click="handleLogout">Logout</button>
    <router-link v-if="isLoggedIn" :to="{ name: 'Register' }">Register</router-link>
  </nav>    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getSidebarStatus', 'isLoggedIn'])
  },
  data () {
    return {
      
    }
  },
  methods: {
    ...mapActions(['updateSidebarStatusAction', 'logout']),
    toggleSidebar () {
      this.updateSidebarStatusAction()
    },
    handleLogout () {
      this.logout()
    }
  }
}
</script>

<style lang="scss" scoped>
.topbar {
  width: 100%;
  height: 5rem;
  background-color: #f5f5f5;
}

@media only screen and (min-width: 992px) {
  .sidebar-toggle {
    display: none;
  }
}
</style>
