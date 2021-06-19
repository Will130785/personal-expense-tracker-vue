<template>
  <nav class="topbar">
    <!-- For VUEX testing purposes -->
    <!-- <button @click="testMethod">Click me</button> -->
    <button v-show="isLoggedIn" class="sidebar-toggle" @click="toggleSidebar">Open</button>
  </nav>    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getSidebarStatus'])
  },
  data () {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    ...mapActions(['updateSidebarStatusAction']),
    toggleSidebar () {
      this.updateSidebarStatusAction()
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

// @media only screen and (min-width: 992px) {
//   .sidebar-toggle {
//     display: none;
//   }
// }
</style>
