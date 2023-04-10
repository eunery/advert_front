<template>
  <h2 class="medium-bold">История заказов</h2>
  <ul class="history-list">
    <li class="history-list__item">
      <div class="history-list__item_tittle">
        <h3 class="medium-bold">Заголовок для заказа Заголовок для заказа Заголовок для заказа</h3>
        <p class="x-small-bold">16.11.2022 / 16 Ноября 2022 года</p>
      </div>
      <p class="history-list__item_size x-small-bold">Ширина: 190см, Высота: 72см</p>
      <p class="history-list__item_place x-small-bold">Левое заднее крыло, Багажник, Правое заднее крыло.</p>
      <p class="history-list__item_text x-small-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Maecenas urna risus, tincidunt pulvinar risus et, vehicula mollis mauris.
        Maecenas sit amet lectus cursus dolor sagittis varius vitae a orci.
        Vestibulum ipsum dolor, rhoncus in turpis vitae, gravida viverra magna...</p>
    </li>
  </ul>
</template>

<script>
import '../../assets/scss/orderHistory.css'

export default {
  name: "OrderHistory",
  data() {
    return {
      items: [
        {id: 1},
        {tittle: ""},
        {location: ""},
        {price: ""},
        {payment_schedule: ""},
        {size: ""},
        {place: ""},
        {text: ""},
        {short_text: ""},
        {user_created: ""},
      ]
    }
  }
}
</script>

<style scoped>

</style>
