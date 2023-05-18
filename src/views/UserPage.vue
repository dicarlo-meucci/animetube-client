<script setup>
import router from '../router'
import UserList from '../components/user/UserList.vue'
import { onMounted, ref } from 'vue'
import { useAPIStore } from '../stores/api'

const { API } = useAPIStore()

const username = window.location.href.split('/')[window.location.href.split('/').length - 1]
const iconScale = ref(6)
const user = ref({})

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
	const result = await API.getUserProfile(username)

	if (!result.ok) {
		router.push('/NotFound')
		return
	}

	user.value = await result.json()
}
fetchProfile()
</script>

<template>
	<div class="profile-wrapper">
		<div
			@click="updateBanner"
			class="profile-banner"
			:style="{
				backgroundImage: `url(${user.banner})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover'
			}"
		></div>
		<div class="pfp-wrapper">
			<img class="pfp" v-if="user.pfp" :src="user.pfp" />
			<v-icon v-if="!user.pfp" name="fa-user" :scale="iconScale" />
			<h2 class="username">@{{ user.username }}</h2>
		</div>
		<div class="profile-info"></div>
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
	top: 0px;
	right: 50px;
	position: absolute;
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
