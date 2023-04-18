<script setup>
//localhost:5173
import Header from './components/Header.vue'
import router from './router'
import { useStore } from './store'
import AnimePageVue from './views/AnimePage.vue'
const store = useStore()
</script>

<template>
	<Header></Header>
	<AnimePageVue/>
</template>

<style scoped></style>
