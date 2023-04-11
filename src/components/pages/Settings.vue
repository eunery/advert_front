<script setup>
</script>

<template>
  <section class="settings">
    <form class="settings_form" @submit.prevent="submit">
      <input class="settings_name bordered-button small-regular" v-model="form.name" type="text" placeholder="Имя">
      <input class="settings_name bordered-button small-regular" v-model="form.surname" type="text" placeholder="Фамилия" >
      <div v-if="false" class="settings__gender_container">
        <div>
          <input class="settings__gender-male" type="checkbox">
          <p class="settings__checkmark small-bold">Мужчина</p>
        </div>
        <div>
          <input class="settings__gender-female" type="checkbox">
          <p class="settings__checkmark small-bold">Женщина</p>
        </div>
      </div>
      <input class="settings_name bordered-button small-regular" v-model="form.email" type="email" placeholder="Электронная почта">
      <input v-if="false" class="settings_name bordered-button small-regular" type="text" placeholder="Возраст">
      <input class="settings__submit bordered-button x-small-bold" type="submit">
    </form>
  </section>
</template>

<script>
import '../../assets/scss/settings.css'
import {useAuthStore} from "@/stores/authStore.js";
import {useRoute} from "vue-router";
import router from "../../router/router.js";

const route = useRoute();
const useStore = useAuthStore();

export default {
  name: "Settings",
  data() {
    return {
      form: {
        name: useStore.user.name,
        surname: useStore.user.surname,
        email: useStore.user.email,
      }
    }
  },
  methods: {
    submit() {
      useStore.accountChangeSettings(this.form).then(() => {
        if (useStore.is_auth){
          router.push({path: '/'}).then(() => {
            // window.location.reload()
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
