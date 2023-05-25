<script setup>
const useStore = useAuthStore();
</script>

<template>
  <div>
    <div class="register">
      <h1 class="register__tittle x-large-bold">Регистрация</h1>
      <form class="register__form" @submit.prevent="submit">
        <input class="register__email default-input-size bordered-button small-regular default-input-color" v-model="form.email" type="email" placeholder="Электронная почта">
        <input class="register__name default-input-size bordered-button small-regular default-input-color" v-model="form.name" type="text" placeholder="Имя">
        <input class="register__name default-input-size bordered-button small-regular default-input-color" v-model="form.surname" type="text" placeholder="Фамилия">
        <input class="register__password default-input-size bordered-button small-regular default-input-color" v-model="form.password" type="password" placeholder="Пароль">
        <input class="register__password_repeat default-input-size bordered-button small-regular default-input-color" v-if="false" type="password" placeholder="Повторите пароль">
        <div v-if="false" class="register__gender-container">
          <div>
            <input class="register__gender-male" type="checkbox">
            <p class="register__checkmark small-bold">Мужчина</p>
          </div>
          <div>
            <input class="register__gender-female" type="checkbox">
            <p class="register__checkmark small-bold">Женщина</p>
          </div>
        </div>
        <input class="register__submit default-input-size bordered-button x-small-bold" type="submit">
      </form>
    </div>
  </div>
</template>

<script>
import '../../assets/scss/register.css'
import {useAuthStore} from "@/stores/authStore.js";
import {useRoute} from "vue-router";
import router from "../../router/router.js";

const route = useRoute();
const useStore = useAuthStore();

export default {
  name: "RegisterForm",
  data() {
    return {
      form: {
        email: null,
        name: null,
        surname: null,
        password: null,
        image: null,
      }
    }
  },
  methods: {
    submit() {
      useStore.reg(this.form).then(() => {
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
