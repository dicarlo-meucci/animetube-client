<script setup>
//localhost:5173
import Header from './components/Header.vue'
import router from './router'
import { useStore } from './store'
const store = useStore()
</script>

<template>
	<Header></Header>
	<router-view />
</template>

<style scoped></style>
