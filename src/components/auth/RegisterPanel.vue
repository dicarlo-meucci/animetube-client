<script setup>
import logo from '../../assets/at-logo.png'
import router from '../../router'
import { ref } from 'vue'
import { useSessionStore } from '../../stores/session'
import { useAPIStore } from '../../stores/api'
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

const { API } = useAPIStore()
const session = useSessionStore()

const email = ref()
const username = ref()
const password = ref()

async function register() {
	const result = await API.register(email.value, username.value, password.value)
	if (result.ok) {
		session.setSession(await result.json())
		clearFields()
		router.push('/profile')
	} else {
		const error = (await result.json()).error
		createToast(
			{
				title: 'Errore',
				description: error
			},
			{
				showIcon: true,
				hideProgressBar: true,
				toastBackgroundColor: '#ff0056',
				position: 'top-center',
				type: 'danger',
				timeout: 2500
			}
		)
	}
}

function clearFields() {
	email.value = ''
	username.value = ''
	password.value = ''
}
</script>

<template>
	<div class="register-wrapper">
		<form @submit.prevent="register" class="register-form">
			<img :src="logo" />
			<h1>Benvenuto su AnimeTube</h1>
			<label for="email">Email</label>
			<input v-model="email" name="email" type="email" placeholder="dev@animetube.com" required />
			<label for="username">Username</label>
			<input v-model="username" name="username" type="text" placeholder="AnimeEnjoyer101" required />
			<label for="password">Password</label>
			<input v-model="password" name="password" type="password" placeholder="******" required />
			<button class="register-button" type="submit">Registrati</button>
			<p @click="router.push('/login')">Login</p>
		</form>
	</div>
</template>

<style scoped>
.register-wrapper {
	width: 100%;
	height: max-content;
	margin: auto;
	margin-top: 50px;
}

.register-form {
	width: 25%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: var(--bg-2);
	margin: auto;
	border-radius: 15px;
	padding: 25px;
}

.register-form *:not(label) {
	padding: 10px;
	margin-top: 15px;
	margin-bottom: 15px;
}

input {
	width: 70%;
	border-radius: 10px;
	border: none;
	outline: none;
	background: var(--bg-3);
	color: var(--text);
}

img {
	width: 40%;
	border-radius: 50%;
	border: 5px solid var(--text-2);
}

.register-button {
	width: 50%;
	border-radius: 10px;
	border: 0;
	background: var(--text-2);
	color: var(--text);
	margin-top: 20px;
	font-size: 1.4rem;
	cursor: pointer;
	font-weight: bolder;
}

p {
	cursor: pointer;
}

h1 {
	text-align: center;
}

@media screen and (max-width: 1300px) {
	.register-form {
		width: 35%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: var(--bg-2);
		margin: auto;
		border-radius: 15px;
		padding: 25px;
	}
}

@media screen and (max-width: 1000px) {
	.register-form {
		width: 40%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: var(--bg-2);
		margin: auto;
		border-radius: 15px;
		padding: 25px;
	}
}

@media screen and (max-width: 800px) {
	.register-form {
		width: 70%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: var(--bg-2);
		margin: auto;
		border-radius: 15px;
		padding: 25px;
	}
}
</style>
