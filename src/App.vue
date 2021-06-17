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
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');

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
  font-family: 'Hind Siliguri', sans-serif;
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
