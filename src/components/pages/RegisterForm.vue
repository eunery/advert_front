<template>
  <div>
    <div class="register">
      <h1 class="register__tittle x-large-bold">Регистрация</h1>
      <form class="register__form">
        <input class="register__email bordered-button small-regular default-input-color" type="email" placeholder="Электронная почта">
        <input class="register__name bordered-button small-regular default-input-color" type="text" placeholder="Имя">
        <input class="register__password bordered-button small-regular default-input-color" type="password" placeholder="Пароль">
        <input class="register__password_repeat bordered-button small-regular default-input-color" type="password" placeholder="Повторите пароль">
        <div class="register__gender-container">
          <div>
            <input class="register__gender-male" type="checkbox">
            <p class="register__checkmark small-bold">Мужчина</p>
          </div>
          <div>
            <input class="register__gender-female" type="checkbox">
            <p class="register__checkmark small-bold">Женщина</p>
          </div>
        </div>
        <input class="register__submit bordered-button x-small-bold" type="submit">
      </form>
    </div>
  </div>
</template>

<script>
import '../../assets/scss/register.css'

export default {
  name: "RegisterForm"
}
</script>

<style scoped>

</style>
