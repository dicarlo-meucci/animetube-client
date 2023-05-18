<script setup>
import router from '../router'
import { useSessionStore } from '../stores/session'
import { useAPIStore } from '../stores/api'
import UserList from '../components/user/UserList.vue'
import { onMounted, ref } from 'vue'

const session = useSessionStore()
const { API } = useAPIStore()

const iconScale = ref(6)

async function logout() {
	await API.logout(session.token)
	session.clearSession()
	router.push('/')
}

async function updateBanner() {
	const result = await API.updateBanner(prompt('link'), session.token)
	if (!result.ok) {
		alert('fallito')
		return
	}

	await fetchProfile()
}

async function updatePfp() {
	const result = await API.updatePfp(prompt('link'), session.token)
	if (!result.ok) {
		alert('fallito')
		return
	}

	await fetchProfile()
}

onMounted(() => {
	getIconScale()
	window.onresize = () => {
		getIconScale()
	}
})

function getIconScale() {
	if (window.innerWidth < 690) iconScale.value = 4
	else iconScale.value = 6
}

async function fetchProfile() {
	const profile = await (await API.getProfile(session.token)).json()
	session.setUsername(profile.username)
	session.setEmail(profile.email)
	session.setBanner(profile.banner)
	session.setPfp(profile.pfp)
}

fetchProfile()
</script>

<template>
	<div class="profile-wrapper">
		<div
			@click="updateBanner"
			class="profile-banner"
			:style="{
				backgroundImage: `url(${session.banner})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover'
			}"
		>
			<v-icon v-if="!session.banner" name="fa-pen" class="pen-icon" :scale="iconScale" />
		</div>
		<div @click="updatePfp" class="pfp-wrapper">
			<img class="pfp" v-if="session.pfp" :src="session.pfp" />
			<v-icon v-if="!session.pfp" name="fa-user" :scale="iconScale" />
			<h2 class="username">@{{ session.username }}</h2>
		</div>
		<div class="logout-wrapper">
			<button @click="logout" class="logout-button" type="button">Logout</button>
		</div>
		<div class="profile-info">
			<UserList />
		</div>
	</div>
</template>

<style scoped>
.profile-wrapper {
	position: relative;
	height: calc(100vh - 60px);
}

.profile-info {
	position: relative;
}

.pfp-wrapper {
	background: var(--bg-2);
	border-radius: 50%;
	width: 120px;
	height: 120px;
	border: 3px solid var(--text-2);
	margin-top: -60px;
	margin-left: 50px;
	text-align: center;
	position: relative;
}

.pfp {
	width: 120px;
	height: 120px;
	border-radius: 50%;
	object-fit: cover;
}

.username {
	color: var(--text-2);
	margin-top: 15px;
}

.logout-button {
	width: 100px;
	height: 50px;
	border-radius: 10px;
	border: 0;
	background: var(--text-2);
	color: var(--text);
	float: right;
	margin-right: 15px;
	font-size: 1.4rem;
	cursor: pointer;
	font-weight: bolder;
}

.profile-banner {
	display: flex;
	background: var(--bg-3);
	padding: 20px;
	text-align: center;
	height: 30vh;
}

.pen-icon:hover {
	transition: all 0.1s;
	color: var(--text-2);
	transform: rotate(5deg);
}

.pen-icon {
	margin: auto;
	padding: 20px;
	border-radius: 50%;
	background-color: var(--bg-2);
}

@media screen and (max-width: 690px) {
	.pfp-wrapper {
		width: 90px;
		height: 90px;
		margin-top: -50px;
		margin-left: 30px;
	}

	.pfp {
		width: 90px;
		height: 90px;
	}

	.username {
		margin-top: 20px;
	}
}
</style>
