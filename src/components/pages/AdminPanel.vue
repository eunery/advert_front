<script setup>
import {useVehicleStore} from "@/stores/vehiclesStore.js";
import {useOrderStore} from "@/stores/orderStore.js";
import {useAuthStore} from "@/stores/authStore.js";
import {onBeforeMount} from "vue";
const vehicleStore = useVehicleStore()
const orderStore = useOrderStore()
const authStore = useAuthStore()

onBeforeMount(() => {
  orderStore.notConfirmedOrders()
  vehicleStore.notConfirmedVehicles()
})
function confirmedOrder(id) {
  authStore.confirmOrderCompletion(id).then(() => {
    orderStore.ordersList = orderStore.ordersList.filter(order => order.id !== id);
  }).catch(() => {
    // console.log('')
  })
}
function confirmedVehicle(id) {
  authStore.confirmVehicleRegistration(id).then(() => {
    vehicleStore.vehiclesList = vehicleStore.vehiclesList.filter(vehicle => vehicle.id !== id);
  }).catch(() => {
    // console.log('')
  })
}

</script>

<template>
  <div class="admin-panel">
    <div class="container">
      <h1 class="medium-tittle-bold admin-panel_tittle">Admin Panel</h1>

      <h2>Запрос на выполнение условий заказов</h2>
      <div v-for="(item, index) in orderStore.ordersList" :key="index">
        <div class="admin-panel__confirm-container">
          <button class="admin-panel__confirm-button bordered-button"
                  type="button"
                  @click="confirmedOrder(item.id)">Подтвердить</button>
          <div class="admin-panel__item-list">
            <img class="admin-panel__item-list_img" src="/src/assets/images/test.png" alt="">
          </div>
          <p class="x-small-regular">id:{{item.id}} {{item.tittle}}</p>
        </div>
      </div>
      <h2>Запрос регистрации транспорта</h2>
      <div v-for="(item, index) in vehicleStore.vehiclesList" :key="index">
        <div class="admin-panel__confirm-container">
          <button class="admin-panel__confirm-button bordered-button"
                  type="button"
                  @click="confirmedVehicle(item.id)">Подтвердить</button>
          <div class="admin-panel__item-list">
            <img class="admin-panel__item-list_img" src="/src/assets/images/car.png" alt="">
          </div>
          <p class="x-small-regular">id:{{item.id}} {{item.model}}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import '../../assets/scss/adminPanel.css'

export default {
  name: "AdminPanel"
}
</script>

<style scoped>

</style>
