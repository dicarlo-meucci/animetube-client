<script setup>
import router from '../router'
import { useStore } from '../store'
const store = useStore()

async function logout() {
	await store.API.logout(store.session.token)
	store.logout()
	router.push('/')
}
</script>

<template>
	<div class="profile-wrapper">
		<button @click="logout">Logout</button>
	</div>
</template>

<style scoped></style>
