<script setup>
const useStore = useAuthStore();
</script>
<template>
  <div>
    <div class="login">
      <h1 class="login__tittle x-large-bold">Вход</h1>
      <form class="login__form" @submit.prevent="submit">
        <input class="login__email default-input-size bordered-button small-regular default-input-color" v-model="form.email" type="email" placeholder="Электронная почта">
        <input class="login__password default-input-size bordered-button small-regular default-input-color" v-model="form.password" type="password" placeholder="Пароль">
        <div v-if="false" class="login__remember-me-container">
          <input class="login__remember-me" type="checkbox">
          <p class="login__checkmark small-bold">Запомнить меня</p>
        </div>
        <span v-if="useStore.error != null">{{useStore.error.response.message}}</span>
        <input class="login__submit default-input-size bordered-button x-small-bold" type="submit">
      </form>
    </div>
  </div>
</template>

<script>
import '../../assets/scss/login.css'
import {useAuthStore} from "@/stores/authStore.js";
import {useRoute} from "vue-router";
import router from "../../router/router.js";

const route = useRoute();
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
      useStore.login(this.form).then(() => {
        if (useStore.is_authed){
          router.push({path: '/'}).then(() => {
            window.location.reload()
          })
        }
      }).catch(() => {
        console.log('123')
      })
    }
  }
}
</script>

<style scoped>

</style>
