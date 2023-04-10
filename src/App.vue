<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import './reset.css'
import Header from "./components/common/Header.vue"
import Footer from "./components/common/Footer.vue"
import './assets/scss/global.css'
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
