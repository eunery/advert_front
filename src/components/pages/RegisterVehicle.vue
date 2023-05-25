<template>
  <h2 class="register-vehicle_tittle medium-bold">Регистрация автомобиля</h2>
  <form class="register-vehicle_form" @submit.prevent="submit">
    <input class="bordered-button small-regular" v-model="form.car_brand" type="text" placeholder="Марка транспорта">
    <input class="bordered-button small-regular" v-model="form.model" type="text" placeholder="Модель">
    <input class="bordered-button small-regular" v-model="form.color" type="text" placeholder="Цвет">
    <input class="bordered-button small-regular" v-model="form.other" type="text" placeholder="Другое">
    <input class="bordered-button small-regular" v-model="form.issue_year" type="text" placeholder="Год выпуска">
    <p>Формат A000AA777</p>
    <input class="bordered-button small-regular" v-model="form.plate_number" type="text" placeholder="Гос. номер">
    <input class="register-vehicle_button bordered-button x-small-bold" type="submit">
  </form>
</template>

<script>
import {useVehicleStore} from "@/stores/vehiclesStore.js";
import {useRoute} from "vue-router";
import router from "../../router/router.js";
import '../../assets/scss/registerVehicle.css';
import '../../assets/scss/global.css'

const route = useRoute();
const useStore = useVehicleStore();

export default {
  name: "RegisterVehicle",
  data() {
    return {
      form: {
        car_brand: null,
        model: null,
        color: null,
        other: null,
        issue_year: null,
        plate_number: null
      }
    }
  },
  methods: {
    submit() {
      useStore.newVehicle(this.form).then(() => {
        if (useStore.is_authed){
          router.push({path: '/account/vehicles'}).then(() => {
            window.location.reload()
          })
        }
      }).catch(() => {
        console.log('123')
      })
    }
  }
}
</script>

<style scoped>

</style>
