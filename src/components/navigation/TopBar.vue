<template>
  <nav class="topbar">
    <!-- For VUEX testing purposes -->
    <!-- <button @click="testMethod">Click me</button> -->
  </nav>    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getTest'])
  },
  mounted () {
    console.log(this.getTest)
  },
  methods: {
    ...mapActions(['updateTestAction']),
    testMethod () {
      this.updateTestAction('Updated Test')
      console.log(this.getTest)
    }
  }
}
</script>

<style lang="scss" scoped>
.topbar {
  width: 100%;
  height: 5rem;
  background-color: #000;
}
</style>
