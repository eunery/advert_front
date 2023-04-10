<script setup>
import {useRoute} from "vue-router";
import '../../assets/scss/orderDetails.css'
import {useOrderStore} from "@/stores/orderStore.js";
import {onBeforeMount, onMounted, ref} from "vue";

const useStore = useOrderStore();
const route = useRoute();

onBeforeMount(() => {
  useStore.getOrder(route.params.id)
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
        <h2 class="medium-tittle-bold" v-if="useStore.order != null">{{useStore.order.tittle}}</h2>
        <h3 class="medium-bold">
          <span v-if="useStore.order != null">{{useStore.order.location}}</span><br>
          <span v-if="useStore.order != null">{{useStore.order.size}}</span><br>
          <span v-if="useStore.order != null">Местоположение: {{useStore.order.place}}</span>
        </h3>
        <p class="medium-regular" v-if="useStore.order != null">{{useStore.order.text}}.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OrderDetails"
}
</script>

<style scoped>

</style>
