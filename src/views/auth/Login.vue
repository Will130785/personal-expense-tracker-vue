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
    <div>{{ getAuthTest }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import { login } from '../../services/auth'
export default {
  computed: {
    ...mapGetters(['getAuth', 'getAuthTest'])
  },
  data () {
    return {
      test: ''
    }
  },
  mounted () {
    // login()
    // .then(res => {
    //   console.log(res)
    // })
    this.authTest()
    console.log(this.getAuthTest)
  },
  methods: {
    ...mapActions(['authTestAction']),
    async authTest () {
      await this.authTestAction()
    }
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
  width: 100%;
  padding: 1rem;
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
  border: 3px solid #fff;
}

.app-form-control:focus {
  border: 3px solid #0058a3;
  outline: none;
}

.app-form-control::placeholder {
  font-family: 'Hind Siliguri', sans-serif;
}

@media only screen and (min-width: 992px) {
  .login-card {
    width: 50%;
  }
}
</style>
