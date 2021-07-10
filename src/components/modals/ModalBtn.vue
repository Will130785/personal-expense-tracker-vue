<template>
  <div>
    <button @click="$emit('handle-modal', modalId)">{{ btnContent }}</button>
  </div>
</template>

<script>
export default {
  props: ['btnContent', 'modalId']
}
</script>

<style scoped lang="scss">

</style>
