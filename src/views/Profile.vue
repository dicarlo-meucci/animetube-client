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
	if (!result.ok)
		alert('fai schifo')
}

async function updatePfp() {
	const result = await store.API.updatePfp(prompt('link'), store.session.token)
	if (!result.ok)
		alert('fallito')
}

onMounted(() => {
	window.onresize = () => {
		getIconScale()
	}
})

function getIconScale() {
	if (window.innerWidth < 690) iconScale.value = 4
	else iconScale.value = 6
}
</script>

<template>
	<div class="profile-wrapper">
		<div @click="updateBanner" class="profile-banner">
			<v-icon name="fa-pen" class="pen-icon" :scale="iconScale"/>
		</div>
		<div @click="updatePfp" class="pfp">
			<v-icon name="fa-user" :scale="iconScale"/>
			<h2 class="username">@cockandballs</h2>
		</div>
	</div>
	<button @click="logout" class="logout-button" type="button">Logout</button>
	<div>
		<UserList />
	</div>
</template>

<style scoped>
.pfp {
	background: var(--bg-2);
	width: max-content;
	padding: 10px;
	border-radius: 50%;
	position: absolute;
	top: 33%;
	left: 3%;
}

.username {
	position: absolute;
	color: var(--text-2);
	margin-top: 20px;
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
	background: url('https://www.powned.it/wp-content/uploads/2023/03/Immagine-2023-03-09-110527-1200x675.jpg');
	background-size: cover;
	background-position: 50%;
	display: flex;
	flex-direction: row;
	color: var(--text);
	padding: 20px;
	text-align: center;
	height: 30vh;
}

.pen-icon {
	margin: auto;
	padding: 20px;
	border-radius: 50%;
	background-color: var(--bg-2);
	display: none;
}

@media screen and (max-width: 690px) {
	.pfp {
		top: 35%;
	}
}
</style>
