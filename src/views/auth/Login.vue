<template>
  <div class="login">
    <div class="login-card">
      <!-- Username -->
      <div class="form-group">
        <input class="app-form-control" type="text" placeholder="Enter Username" />
      </div>
      <!-- Password -->
      <div class="form-group">
        <input class="app-form-control" type="password" placeholder="Enter Password" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getAuth'])
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  width: 50%;
}

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
}
</style>
