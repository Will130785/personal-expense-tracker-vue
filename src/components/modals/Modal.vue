<template>
  <div v-if="showModal + modalId" class="modal">
    <div class="modal__content">
      <p>This will be the modal</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showModal', 'modalId']
}
</script>

<style scoped lang="scss">
.modal {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.329);
  position: fixed;
  top: 0;
  left: 0;

  &__content {
    width: 70%;
    background-color: #fff;
  }
}
</style>