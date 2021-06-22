<template>
  <div class="register">
    <div class="register-card">
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
      <!-- Confirm Password -->
      <Input
        v-model="user.passwordConfirm"
        inputType="password"
        placeholder="Confirm Password"
      />
      <!-- Login Btn -->
      <div class="form-group">
        <button @click="handleRegister" class="login-btn">Login</button>
      </div>
    </div>
    <!-- For testing purposes -->
    <!-- <div>{{ getUser }}</div> -->
    <!-- <div>{{ user }}</div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Input from '../../components/forms/Input'
// import { login } from '../../services/auth'
import { required, minLength } from 'vuelidate/lib/validators'
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
        password: '',
        passwordConfirm: ''
      },
      invalidForm: false
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
    ...mapActions(['registerAction', 'flashMessageAction']),
    // async authTest () {
    //   await this.authTestAction()
    // },
    async handleRegister () {
      console.log('You want to register user')
      // Collect login data and send request
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.invalidForm = true
        console.log('Form is invalid')
        if (!this.$v.user.username.minLength) {
          this.flashMessageAction('Username must be at least 5 characters')
        }
        if (!this.$v.user.username.required) {
          this.flashMessageAction('Username is required')
        }
        if (!this.$v.user.password.minLength) {
          this.flashMessageAction('Password must be at least 5 characters')
        }
        if (!this.$v.user.password.required) {
          this.flashMessageAction('Password is required')
        }
        // if (!this.$v.user.passwordConfirm.sameAs) {
        //   this.flashMessageAction('Password does not match')
        // }
      } else {
        const res = await this.registerAction(this.user)
      if (res) {
        console.log(res)
        this.user.username = '',
        this.user.password = ''
        this.user.passwordConfirm = ''
      } else {
        console.log('error')
      }
      }
    }
  },
  validations: {
    user: {
      username: {
        required,
        minLength: minLength(5)
      },
      password: {
        required,
        minLength: minLength(5)
      },
      passwordConfirm: {
        required,
        minLength: minLength(5)
        // sameAs: sameAs(function(){this.user.password})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-card {
  width: 100%;
  padding: 1rem;
}

// .form-group {
//   margin: 2rem 0;
//   width: 100%;
// }

// .app-form-control {
//   width: 100%;
//   border-radius: 3rem;
//   padding: 1.5rem;
//   border: none;
//   background-color: #f5f5f5;
//   font-size: 1.8rem;
//   border: 3px solid #fff;
// }

// .app-form-control:focus {
//   border: 3px solid #0058a3;
//   outline: none;
// }

// .app-form-control::placeholder {
//   font-family: 'Hind Siliguri', sans-serif;
// }

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
  .register-card {
    width: 50%;
  }
}
</style>
