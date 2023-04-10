<template>
  <div>
    <div class="login">
      <h1 class="login__tittle x-large-bold">Вход</h1>
      <form class="login__form" @submit.prevent="submit">
        <input class="login__email bordered-button small-regular default-input-color" v-model="form.email" type="email" placeholder="Электронная почта">
        <input class="login__password bordered-button small-regular default-input-color" v-model="form.password" type="password" placeholder="Пароль">
        <div class="login__remember-me-container">
          <input class="login__remember-me" type="checkbox">
          <p class="login__checkmark small-bold">Запомнить меня</p>
        </div>
        <input class="login__submit bordered-button x-small-bold" type="submit">
      </form>
    </div>
  </div>
</template>

<script>
import '../../assets/scss/login.css'
import {useAuthStore} from "@/stores/authStore.js";

const useStore = useAuthStore();

export default {
  name: "LoginForm",
  data() {
    return {
      form: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    submit() {
      console.log(this.form)
      useStore.login(this.form)
    }
  }
}
</script>

<style scoped>

</style>
