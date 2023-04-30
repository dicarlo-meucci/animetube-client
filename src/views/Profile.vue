<script setup>
import router from '../router'
import { useStore } from '../store'
const store = useStore()

async function logout() {
	await store.API.logout(store.session.token)
	store.logout()
	router.push('/')
}

async function bannerImage() {
	store.bannerImage()
}
</script>

<template>
	<div class="profile-wrapper">
		<div @click="bannerImage" class="profile-banner">

		</div>
		<button @click="logout">Logout</button>
	</div>
</template>

<style scoped>
.profile-banner {
	background: var(--bg-4);
	display: flex;
	flex-direction: row;
	color: var(--text);
	padding: 20px;
	text-align: center;
	height: 30vh;
}
</style>
