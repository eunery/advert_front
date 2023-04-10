<template>
  <section class="offer">
    <div class="container">
      <div class="offer__container">
        <div class="offer__left">
          <img class="offer__car" src="src/assets/images/car2.png">
        </div>
        <div class="offer__right">
          <h2 class="x-large-bold">Начните ваше сотрудничество прямо сейчас </h2>
          <p class="medium-medium">
            Зарегистрируйтесь в личном кабинете, чтобы начать. Заполните нужную информацию. Выбирайте подходящие для себя условия
          </p>
          <button class="offer__button bordered-button x-small-bold">
            <router-link :to="{name: 'login'}">Вход</router-link></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '../../assets/scss/home.css'

export default {
  name: "Offer"
}
</script>

<style scoped>

</style>
