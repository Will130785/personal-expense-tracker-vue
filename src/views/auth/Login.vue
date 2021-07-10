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
        <StandardBtn @btn-clicked="handleLogin" btnContent="Login" />
      </div>
    </div>
    <!-- For testing purposes -->
    <!-- <div>{{ getUser }}</div> -->
    <!-- <div>{{ user }}</div> -->
    <!-- <Flash /> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Input from '../../components/forms/Input'
import StandardBtn from '../../components/buttons/StandardBtn'
// import Flash from '../../components/flash-messages/Flash'
// import { login } from '../../services/auth'
export default {
  components: {
    Input,
    StandardBtn
    // Flash
  },
  computed: {
    // ...mapGetters(['getAuth', 'getUser'])
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
      console.log(this.user)
      const res = await this.loginAction(this.user)
      console.log(await res)
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

@media only screen and (min-width: 992px) {
  .login-card {
    width: 50%;
  }
}
</style>
