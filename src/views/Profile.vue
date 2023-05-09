<script setup>
import router from '../router'
import { useStore } from '../store'
import UserList from '../components/user/UserList.vue';
import { onMounted, ref } from 'vue';

const store = useStore()
const iconScale = ref(6)

async function logout() {
	await store.API.logout(store.session.token)
	store.logout()
	router.push('/')
}

async function bannerImage() {
	store.API.bannerImage()
}
async function pfp() {
	store.API.pfp()
}

onMounted(() => {
	window.onresize = () => {
		getIconScale()
	}
})

function getIconScale() {
	if (window.innerWidth < 690)
		iconScale.value = 4
	else
	iconScale.value = 6
}
</script>

<template>
	<div class="profile-wrapper">
		<div @click="bannerImage" class="profile-banner">
			
		</div>
		<div @click="pfp" class="pfp ">
			<v-icon name="fa-user" :scale="iconScale"/>
		</div>
		<h1>{{ store.session.username }}</h1>
		<button @click="logout" class="logout-button" type="button">Logout</button>

	</div>
	<div>
		<UserList />
	</div>
</template>

<style scoped>
.pfp {
	background: var(--bg-2);
	width: max-content;
	height: max-content;
	padding: 10px;
	border-radius: 50%;
	margin-right: 5px;
	position: absolute;
	top: 33%;
	left: 3%;
}

.logout-button {
	width: 20%;
	height: 50px;
	border-radius: 10px;
	border: 0;
	background: var(--text-2);
	color: var(--text);
	margin-top: 20px;
	font-size: 1.4rem;
	cursor: pointer;
	font-weight: bolder;
	margin-left: 75%;
}


.profile-banner {
	background: var(--bg-4);
	display: flex;
	flex-direction: row;
	color: var(--text);
	padding: 20px;
	text-align: center;
	height: 30vh;
}

@media screen and (max-width: 690px) {
	.pfp {
	top: 35%;
}
}
</style>
