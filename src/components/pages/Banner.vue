<script setup>
import {useAuthStore} from "../../stores/authStore.js";

const useStore = useAuthStore()
</script>

<template>
  <section class="banner">
    <div class="container">
      <div class="wrapper">
        <div class="banner_left">
          <h1 class="banner__tittle x-large-bold">
            Лучший сервис размещения рекламы на транспорте!
          </h1>
          <p class="banner__text medium-medium">
            Разместите заказ на своей машине и получи вознаграждение
          </p>
          <button v-if="!useStore.is_auth" class="banner__login x-small-bold bordered-button" type="button"><router-link :to="{name: 'login'}">Вход</router-link></button>
        </div>
        <div class="banner_right">
          <img class="car" alt="" src="src/assets/images/car.png">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '../../assets/scss/home.css'

export default {
  name: "Banner"
}
</script>

<style scoped>

</style>
