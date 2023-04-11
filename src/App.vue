<script setup>
import './reset.css'
import Header from "./components/common/Header.vue"
import Footer from "./components/common/Footer.vue"
import './assets/scss/global.css'
import {useAuthStore} from "./stores/authStore.js";

const useStore = useAuthStore()

</script>
<template>
  <Header class="header" />
  <div class="content">
    <router-view/>
  </div>
  <Footer class="footer"/>
</template>

<style scoped>

</style>
