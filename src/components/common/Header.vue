<script setup>
import {useAuthStore} from "@/stores/authStore.js";

const useStore = useAuthStore();
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
        <li class="nav-bar__item x-small-regular"><router-link :to="{name: 'contacts'}">Контакты</router-link></li>
        <li class="nav-bar__item x-small-regular"><router-link :to="{name: 'help'}">Помощь</router-link></li>
        <li v-if="false" class="nav-bar__item"><button class="nav-bar_login bordered-button x-small-bold">
          <router-link :to="{name: 'login'}">Вход</router-link></button>
        </li>
        <li v-if="useStore.user!=null" class="nav-bar__item x-small-bold">
          <router-link :to="{name: 'account'}">{{useStore.user.name}} {{useStore.user.surname}}</router-link>
          <router-link :to="{name: 'account'}">
            <img class="nav-bar__item_avatar" src="@/assets/images/test.png"></router-link>
          <router-link to="/logout">Выход</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import '../../assets/scss/header.css'
import {useAuthStore} from "@/stores/authStore.js";
export default {
  name: "Header",
  data() {

  }
}
</script>

<style scoped>

</style>
