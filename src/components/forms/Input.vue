<template>
  <div class="form-group">
    <input class="app-form-control" :type="inputType" :placeholder="placeholder" @input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  props: ['inputType', 'placeholder']
}
</script>

<style scoped lang="scss">
.form-group {
  margin: 2rem 0;
  width: 100%;
}

.app-form-control {
  width: 100%;
  border-radius: 3rem;
  padding: 1.5rem;
  border: none;
  background-color: #f5f5f5;
  font-size: 1.8rem;
  border: 3px solid #fff;
}

.app-form-control:focus {
  border: 3px solid #0058a3;
  outline: none;
}

.app-form-control::placeholder {
  font-family: 'Hind Siliguri', sans-serif;
}
</style>