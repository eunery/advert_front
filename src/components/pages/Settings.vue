<template>
  <section class="settings">
    <form class="settings_form">
      <input class="settings_name bordered-button small-regular" type="text" placeholder="Имя">
      <input class="settings_name bordered-button small-regular" type="text" placeholder="Фамилия">
      <input class="settings_name bordered-button small-regular" type="text" placeholder="Отчество">
      <div class="settings__gender_container">
        <div>
          <input class="settings__gender-male" type="checkbox">
          <p class="settings__checkmark small-bold">Мужчина</p>
        </div>
        <div>
          <input class="settings__gender-female" type="checkbox">
          <p class="settings__checkmark small-bold">Женщина</p>
        </div>
      </div>
      <input class="settings_name bordered-button small-regular" type="email" placeholder="Электронная почта">
      <input class="settings_name bordered-button small-regular" type="text" placeholder="Возраст">
      <input class="settings__submit bordered-button x-small-bold" type="submit">
    </form>
  </section>
</template>

<script>
import '../../assets/scss/settings.css'

export default {
  name: "Settings"
}
</script>

<style scoped>

</style>
