<script setup>
import '../../assets/scss/vehicles.css'
import {useVehicleStore} from "@/stores/vehiclesStore.js";
import {onBeforeMount} from "vue";
import router from "../../router/router.js";

const useStore = useVehicleStore()

onBeforeMount(() => {
  useStore.getVehicles()
})

function deleteVeh(id) {
  useStore.deleteVehicle(id).then(() => {
    // console.log('')
  }).catch(() => {
    // console.log('')
  })
}
</script>

<template>
  <div class="vehicles__header">
    <h2> Зарегистрированный транспорт: {{ useStore.vehiclesList.length }}</h2>
    <button class="add-vehicle_button bordered-button x-small-bold"><router-link :to="{name: 'registerVehicle'}">Добавить</router-link></button>
  </div>
  <div v-for="(item, index) in useStore.vehiclesList" :key="index" class="vehicles-list">
    <div class="vehicles-list__item">
      <img class="vehicles-list__item_image" src="@/assets/images/mercedes.jpg">
      <h3>{{ item.car_brand }} {{item.model}} {{ item.color }}</h3>
      <p>{{item.plate_number}}</p>
      <p>{{item.other}}</p>
      <p>Год выпуска: {{item.issue_year}}</p>
      <div class="delete-vehicle">
        <button class="delete-vehicle_button bordered-button x-small-bold" @click="deleteVeh(item.id)">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vehicles",
  data() {
    return {
      form: {
        // list: useStore.vehiclesList
      }
    }
  }
}
</script>

<style scoped>

</style>
