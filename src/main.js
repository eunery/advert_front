import {createApp, onBeforeMount} from 'vue'
import { createPinia } from "pinia";
import '@/reset.css'
import App from '@/App.vue'
import router from "@/router/router.js";

const pinia = createPinia()
// pinia.use((context) => {
//
//     const storeId = context.store.$id
//     const serializer = {
//         serialize: JSON.stringify,
//         deserialize: JSON.parse
//     }
//
//     // sync store from localstorage
//     const fromStorage = serializer.deserialize(window.localStorage.getItem(storeId))
//
//     if (fromStorage) {
//         context.store.$patch(fromStorage)
//     }
//
//     // listen for changes and update localstorage
//     context.store.$subscribe((mutation, state) => {
//         // console.log(mutation, state)
//         window.localStorage.setItem(storeId, serializer.serialize(state))
//     })
// })

createApp(App).use(pinia).use(router).mount('#app')
