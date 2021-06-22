<template>
  <div class="flash">
    <div class="flash-icon">
      <p>&#33;</p>
    </div>
    <div class="flash-text">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String
  }
}
</script>

<style scoped lang="scss">
.flash {
  position: absolute;
  top: 6rem;
  right: 1rem;
  display: flex;
}
</style>