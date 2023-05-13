<script setup>
import router from '../router'
import { useStore } from '../store'
import UserList from '../components/user/UserList.vue'
import { onMounted, ref } from 'vue'

const store = useStore()
const iconScale = ref(6)

async function logout() {
	await store.API.logout(store.session.token)
	store.logout()
	router.push('/')
}

async function updateBanner() {
	const result = await store.API.updateBanner(prompt('link'), store.session.token)
	if (!result.ok) {
		alert('fallito')
		return
	}

	await fetchProfile()
}

async function updatePfp() {
	const result = await store.API.updatePfp(prompt('link'), store.session.token)
	if (!result.ok) {
		alert('fallito')
		return
	}

	await fetchProfile()
}

onMounted(() => {
	window.onload = () => {
		getIconScale()
	}
	window.onresize = () => {
		getIconScale()
	}
})

function getIconScale() {
	if (window.innerWidth < 690) iconScale.value = 4
	else iconScale.value = 6
}

async function fetchProfile() {
	const profile = await (await store.API.getProfile(store.session.token)).json()
	store.setSession({
		username: profile.username,
		email: profile.email,
		banner: profile.banner,
		pfp: profile.pfp,
		token: store.session.token
	})
}

fetchProfile()
</script>

<template>
	<div class="profile-wrapper">
		<div
			@click="updateBanner"
			class="profile-banner"
			:style="{
				backgroundImage: `url(${store.session.banner})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover'
			}"
		>
			<v-icon v-if="!store.session.banner" name="fa-pen" class="pen-icon" :scale="iconScale" />
		</div>
		<div @click="updatePfp" class="pfp-wrapper">
			<img class="pfp" v-if="store.session.pfp" :src="store.session.pfp" />
			<v-icon v-if="!store.session.pfp" name="fa-user" :scale="iconScale" />
			<h2 class="username">@{{ store.session.username }}</h2>
		</div>
	</div>
	<button @click="logout" class="logout-button" type="button">Logout</button>
	<div>
		<UserList />
	</div>
</template>

<style scoped>
.pfp-wrapper {
	background: var(--bg-2);
	border-radius: 50%;
	width: 120px;
	height: 120px;
	border: 3px solid var(--text-2);
	position: absolute;
	top: 34%;
	left: 4%;
	text-align: center;
}

.pfp {
	width: 120px;
	height: 120px;
	border-radius: 50%;
	object-fit: cover;
}

.username {
	position: absolute;
	color: var(--text-2);
	margin-top: 10px;
}

.logout-button {
	width: 100px;
	height: 50px;
	border-radius: 10px;
	border: 0;
	background: var(--text-2);
	color: var(--text);
	margin-top: 50px;
	margin-right: 50px;
	float: right;
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
	transition: all .1s;
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
		top: 36%;
	}

	.pfp {
		width: 90px;
		height: 90px;
	}
}
</style>
