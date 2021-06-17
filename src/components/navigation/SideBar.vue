<template>
  <nav v-if="getAuth" class="sidebar">
    <ul class="sidebar-links">
      <li class="sidebar-link" v-for="(link, index) in navLinks" :key="index">
        <router-link :to="{ name: link.name }">{{ link.link }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getAuth'])
  },
  data () {
    return {
      navLinks: [
        { name: 'Dashboard', link: 'Dashboard' },
        { name: 'Groceries', link: 'Groceries' },
        { name: 'HomeShopping', link: 'Home Shopping' },
        { name: 'Profile', link: 'Profile' },
        { name: 'Social', link: 'Social' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 20%;
  height: 100%;
  background-color: #000;
}

.sidebar-link a {
  color: #fff;
}
</style>
