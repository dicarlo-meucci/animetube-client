import { createApp } from 'vue'

import VueSplide from '@splidejs/vue-splide';
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import * as FaIcons from 'oh-vue-icons/icons/fa'
import './style.css'
import router from './router'
import App from './App.vue'

const Fa = Object.values({ ...FaIcons })
addIcons(...Fa)

createApp(App).use( VueSplide ).use(router).use(createPinia()).component('v-icon', OhVueIcon).mount('#app')

