<template>
  <nav v-if="isLoggedIn" class="sidebar" :class="{'sidebar-open': getSidebarStatus}">
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
    ...mapGetters(['getAuth', 'getSidebarStatus', 'isLoggedIn'])
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
  position: fixed;
  left: -30%;
  height: 100%;
  background-color: #f5f5f5;
  transition: all .3s;
}

.sidebar-open {
  left: 0;
  width: 30%;
}

.sidebar-links {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
}

.sidebar-link a {
  color: #000;
  text-decoration: none;
  font-size: 1.6rem;
}

@media only screen and (min-width: 992px) {
  .sidebar {
    position: relative;
    width: 20%;
    left: 0;
  }
}
</style>
