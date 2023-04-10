import { createApp } from 'vue'
import { createPinia } from "pinia";
import './reset.css'
import App from './App.vue'
import router from "./router.js";

createApp(App).use(createPinia()).use(router).mount('#app')
