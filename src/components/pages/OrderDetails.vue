<script setup>
import {useRoute} from "vue-router";
import '../../assets/scss/orderDetails.css'
import {useOrderStore} from "@/stores/orderStore.js";
import {onBeforeMount, onMounted, ref} from "vue";

const useVehicleStore = useOrderStore();
const authStore = useAuthStore()
const route = useRoute();

onBeforeMount(() => {
  useVehicleStore.getOrder(route.params.id)
})


</script>

<template>
  <section class="order__details">
    <div class="container">
      <div class="details_wrapper">
        <div class="details__image-container">
          <img class="details__main_image" src="/src/assets/images/test.png" alt="">
          <div class="details_images">
            <img class="details__small_image" src="/src/assets/images/test.png" alt="">
            <img class="details__small_image" src="/src/assets/images/test.png" alt="">
            <img class="details__small_image" src="/src/assets/images/test.png" alt="">
            <img class="details__small_image" src="/src/assets/images/test.png" alt="">
          </div>
        </div>
        <h2 class="medium-tittle-bold" v-if="useVehicleStore.order != null">{{ useVehicleStore.order.tittle }}</h2>
        <h3 class="medium-bold">
          <span v-if="useVehicleStore.order != null">{{ useVehicleStore.order.location }}</span><br>
          <span v-if="useVehicleStore.order != null">{{ useVehicleStore.order.size }}</span><br>
          <span v-if="useVehicleStore.order != null">Местоположение: {{ useVehicleStore.order.place }}</span>
        </h3>
        <p class="medium-regular" v-if="useVehicleStore.order != null">{{ useVehicleStore.order.text }}.</p>
        <form v-if="authStore.is_auth" @submit.prevent="submit">
          <select class="choose_vehicle bordered-button" v-model="form.selected">
            <option selected disabled>Выберите транспорт</option>
            <option v-for="(item, index) in form.list" :key="index" :value="item">{{item.plate_number}}</option>
          </select>
          <button class="accept-order bordered-button" type="submit">Оформить</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import {useVehicleStore} from "@/stores/vehiclesStore.js";
import router from "../../router/router.js";
import {useAuthStore} from "@/stores/authStore.js";

const vehicleStore = useVehicleStore()
const authStore = useAuthStore()

export default {
  name: "OrderDetails",
  data() {
    return {
      form: {
        list: vehicleStore.vehiclesList,
        selected: null
      }
    }
  },
  methods: {
    submit() {
      authStore.acceptOrder(this.$route.params.id).then(() => {
        // if (authStore.is_authed){
          router.push({path: '/orders'}).then(() => {
            // window.location.reload()
          })
        // }
      }).catch(() => {
        console.log('123')
      })
    }
  }
}
</script>

<style scoped>

</style>
