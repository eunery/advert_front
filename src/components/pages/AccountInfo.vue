<script setup>
import {useAuthStore} from "@/stores/authStore.js";
const useStore = useAuthStore()
</script>

<template>
  <div>
    <p>Имя: {{useStore.user.name}}</p>
    <p>Фамилия: {{useStore.user.surname}}</p>
    <p>Баланс: {{useStore.user.balance}}₽</p>
    <p>Почта: {{useStore.user.email}}</p>
  </div>
</template>

<script>
export default {
  name: "AccountInfo"
}
</script>

<style scoped>

</style>
