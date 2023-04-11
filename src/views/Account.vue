<script setup>
import {useAuthStore} from "@/stores/authStore.js";
import {onBeforeMount} from "vue";

const useStore = useAuthStore()

onBeforeMount(() => {
  useStore.checkingAuth()
})
</script>

<template>
  <div class="account">
    <div class="container">
      <div class="account_left">
        <router-link :to="{name: 'accountInfo'}">
          <div class="account__info medium-bold">
            <img src="../assets/images/info.svg" alt="">
            <p>Аккаунт</p>
          </div>
        </router-link>
        <router-link :to="{name: 'accountSettings'}">
          <div class="account__settings medium-bold">
            <img src="../assets/images/settingsBlack.svg" alt="">
            <p>Настройки</p>
          </div>
        </router-link>
        <router-link :to="{name: 'accountHistory'}">
          <div class="account__order-history medium-bold">
            <img src="../assets/images/foldersBlack.svg" alt="">
            <p>История заказов</p>
          </div>
        </router-link>
        <router-link :to="{name: 'accountVehicles'}">
          <div class="account__vehicles medium-bold">
            <img src="../assets/images/carBlack.svg" alt="">
            <p>Ваш транспорт</p>
          </div>
        </router-link>
      </div>
      <div class="account_right">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Settings from "../components/pages/Settings.vue";
import OrderHistory from "../components/pages/OrderHistory.vue";
import Vehicles from "../components/pages/Vehicles.vue";
import '../assets/scss/account.css'
import '../assets/scss/global.css'

export default {
  name: "Account",
  components: {Vehicles, Settings, OrderHistory}
}
</script>

<style scoped>

</style>
