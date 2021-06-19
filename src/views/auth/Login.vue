<template>
  <div class="login">
    <div class="login-card">
      <!-- Username -->
      <Input
        v-model="user.username"
        inputType="text"
        placeholder="Enter Username"
      />
      <!-- Password -->
      <Input
        v-model="user.password"
        inputType="password"
        placeholder="Enter Password"
      />
      <!-- Login Btn -->
      <div class="form-group">
        <button @click="handleLogin" class="login-btn">Login</button>
      </div>
    </div>
    <!-- For testing purposes -->
    <!-- <div>{{ getUser }}</div> -->
    <div>{{ user }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Input from '../../components/forms/Input'
// import { login } from '../../services/auth'
export default {
  components: {
    Input
  },
  computed: {
    ...mapGetters(['getAuth', 'getUser'])
  },
  data () {
    return {
      test: '',
      user: {
        username: '',
        password: ''
      }
    }
  },
  mounted () {
    // login()
    // .then(res => {
    //   console.log(res)
    // })
    // this.authTest()
    // console.log(this.getAuthTest)
  },
  methods: {
    ...mapActions(['loginAction']),
    // async authTest () {
    //   await this.authTestAction()
    // },
    async handleLogin () {
      console.log('You want to login')
      // Collect login data and send request
      await this.loginAction(this.user)
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

.login-btn {
  width: 100%;
  border: 3px solid #fff;
  padding: 1rem;
  border-radius: 3rem;
  font-size: 1.8rem;
  color: #fff;
  background-color: #fbdd01;
  cursor: pointer;
}

@media only screen and (min-width: 992px) {
  .login-card {
    width: 50%;
  }
}
</style>
