<template>
  <div id="app">
    <TopBar />
    <div class="main-container">
      <SideBar />
      <router-view />
    </div>
  </div>
</template>

<script>
import TopBar from './components/navigation/TopBar'
import SideBar from './components/navigation/SideBar'
export default {
  components: {
    TopBar,
    SideBar
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  height: 100%;
}

body {
  font-family: sans-serif;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
}

.main-container {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>
