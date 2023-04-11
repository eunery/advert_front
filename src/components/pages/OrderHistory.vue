<script setup>
import '../../assets/scss/orderHistory.css'
import {useOrderStore} from "@/stores/orderStore.js";
import {onBeforeMount, onMounted, ref} from "vue";

const useStore = useOrderStore()

onBeforeMount(() => {
  useStore.getOrdersHistory()
})
</script>

<template>
  <h2 class="medium-bold">История заказов: {{ useStore.ordersHistory.length }}</h2>
  <ul class="history-list" v-for="(item, index) in useStore.ordersHistory" :key="index">
    <li class="history-list__item">
      <div class="history-list__item_tittle">
        <h3 class="medium-bold"><router-link :to="{name: 'orderDetails', params: {id: item.id}}">{{item.tittle}}</router-link></h3>
        <p class="x-small-bold">{{item.created_at}} / --</p>
      </div>
      <p class="history-list__item_size x-small-bold">{{ item.size }}</p>
      <p class="history-list__item_place x-small-bold">{{ item.place }}</p>
      <p class="history-list__item_text x-small-regular">{{ item.text }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "OrderHistory",
}
</script>

<style scoped>

</style>
