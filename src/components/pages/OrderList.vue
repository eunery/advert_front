<script setup>
import '../../assets/scss/orders.css'
import {useOrderStore} from "@/stores/orderStore.js";
import {onBeforeMount, onMounted, ref} from "vue";

const useStore = useOrderStore();

onBeforeMount(() => {
  useStore.getOrders()
})


</script>

<template xmlns="http://www.w3.org/1999/html">
  <div class="orders">
    <div class="container">
      <input class="orders_search default-input-size bordered-button small-regular" type="search" placeholder="Поиск">
      <h1 class="orders__tittle large-bold">Всего найдено: {{useStore.ordersList.length}} заказов</h1>
      <div v-for="(item, index) in useStore.ordersList" :key="index" class="orders__list">
        <div class="orders__item">
          <div class="item_tittle">
            <h2 class="medium-tittle-bold" ><router-link :to="{name: 'orderDetails', params: {id: item.id}}">{{item.tittle}}</router-link></h2>
            <h3 class="medium-bold">{{item.price}}₽ {{item.payment_schedule}}</h3>
          </div>
          <h4 class="medium-bold">{{item.location}}</h4>
          <h5 class="medium-bold"> <span> {{item.size}} </span> <br>
           <span>{{item.place}}</span> </h5>
          <p class="medium-regular">{{item.short_text}}</p>
        </div>
      </div>
<!--     <div class="orders__pagination">-->
<!--        <div class="pagination_container">-->
<!--          <p>1</p>-->
<!--          <p>2</p>-->
<!--          <p>3</p>-->
<!--          <p>4</p>-->
<!--          <p>5</p>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>

export default {
  name: "OrderList"
}
</script>

<style scoped>

</style>
