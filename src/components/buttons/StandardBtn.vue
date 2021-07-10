<template>
  <button class="standard-btn" @click.prevent="$emit('btn-clicked')">{{ btnContent }}</button>
</template>

<script>
export default {
  props: ['btnContent']
}
</script>

<style scoped lang="scss">

.standard-btn {
  width: 100%;
  border: 3px solid #fff;
  padding: 1rem;
  border-radius: 3rem;
  font-size: 1.8rem;
  color: #fff;
  background-color: #fbdd01;
  cursor: pointer;
}
</style>
