<script setup>
import router from '../router'
import { useStore } from '../store'
import UserListVue from '../components/user/UserList.vue';

const store = useStore()

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



</script>

<template>
	<div class="profile-wrapper">
		<div @click="bannerImage" class="profile-banner">

		</div>
		<div @click="pfp" class="pfp ">
			<v-icon name="fa-user" class="resp" />
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
	padding: 10px;
	width: max-content;
	height: max-content;
	border-radius: 50%;
	margin-right: 5px;
	text-align: center;
	position: absolute;
	top: 33%;
	left: 3%;
}

.resp {
	scale: 7;
}

@media screen and (max-width: 800px) {
	.resp {

		scale: 6;
	}

}

@media screen and (max-width: 600px) {
	.resp {
		scale: 5;
	}
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
}</style>
