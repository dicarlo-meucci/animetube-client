import { createApp } from 'vue'
import VueSplide from '@splidejs/vue-splide'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaUser, FaPen, FaStar, FaPlay } from 'oh-vue-icons/icons/fa'
import './style.css'
import router from './router'
import App from './App.vue'

addIcons(FaUser, FaPen, FaStar, FaPlay)

createApp(App).use(VueSplide).use(router).use(createPinia()).component('v-icon', OhVueIcon).mount('#app')
