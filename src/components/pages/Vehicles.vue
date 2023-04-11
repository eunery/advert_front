<script setup>
import '../../assets/scss/vehicles.css'
import {useVehicleStore} from "@/stores/vehiclesStore.js";
import {onBeforeMount} from "vue";

const useStore = useVehicleStore()

onBeforeMount(() => {
  useStore.getVehicles()
})

</script>

<template>
  <div class="vehicles__header">
    <h2> Зарегистрированный транспорт: {{ useStore.vehiclesList.length }}</h2>
    <button>Добавить</button>
  </div>
  <div v-for="(item, index) in useStore.vehiclesList" :key="index" class="vehicles-list">
    <div class="vehicles-list__item">
      <img class="vehicles-list__item_image" src="@/assets/images/mercedes.jpg">
      <h3>{{ item.car_brand }} {{item.model}} {{ item.color }}</h3>
      <p>{{item.plate_number}}</p>
      <p>{{item.other}}</p>
      <p>Год выпуска: {{item.issue_year}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vehicles"
}
</script>

<style scoped>

</style>
