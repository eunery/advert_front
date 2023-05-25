<script setup>
import {useAuthStore} from "@/stores/authStore.js";
const useStore = useAuthStore();

function logout() {
  useStore.logout().then(() => {
    router.replace({ name: 'home'})
  }).catch(() => {
    console.log('123')
  })
}

</script>

<template>
  <div class="container">
    <div class="nav-bar">
      <div class="nav-bar_left">
        <div class="nav-bar__item medium-large-bold">
          <router-link :to="{name: 'home'}">Adly</router-link>
        </div>
      </div>
      <ul class="nav-bar_right">
        <li class="nav-bar__item x-small-regular" ><router-link :to="{name: 'home'}" >Главная</router-link></li>
        <li class="nav-bar__item x-small-regular" ><router-link :to="{name: 'orders'}">Заказы</router-link></li>
        <li class="nav-bar__item x-small-regular"><router-link :to="{name: 'about'}">О нас</router-link></li>
        <li class="nav-bar__item x-small-regular"><router-link :to="{name: 'registration'}">≈Контакты≈</router-link></li>
        <li class="nav-bar__item x-small-regular"><router-link :to="{name: 'login'}">∑Помощь∑</router-link></li>
        <li v-if="!useStore.is_auth" class="nav-bar__item"><button class="nav-bar_login bordered-button x-small-bold">
          <router-link :to="{name: 'login'}">Вход</router-link></button>
        </li>
        <li v-if="useStore.is_auth" class="nav-bar__item x-small-bold">
          <router-link :to="{name: 'accountInfo'}"> {{useStore.user.balance}}₽ {{useStore.user.name}} {{useStore.user.surname}}</router-link>
          <router-link :to="{name: 'accountInfo'}">
            <img class="nav-bar__item_avatar" src="@/assets/images/test.png"></router-link>
          <button class="exit_button bordered-button x-small-bold" type="submit" @click="logout">Выход</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import '../../assets/scss/header.css'
import router from "@/router/router.js";

export default {
  name: "Header",
  methods: {

  }
}
</script>

<style scoped>

</style>
