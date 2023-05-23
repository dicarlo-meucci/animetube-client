<script setup>
import { useSessionStore } from '../../stores/session'
import { useAPIStore } from '../../stores/api'
import logo from '../../assets/at-logo.png'
import router from '../../router'
import { ref } from 'vue'
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

const session = useSessionStore()
const { API } = useAPIStore()

const username = ref()
const password = ref()

async function login() {
	const result = await API.login(username.value, password.value)
	if (result.ok) {
		session.setToken((await result.json()).token)
		clearFields()
		router.push('/')
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
	username.value = ''
	password.value = ''
}
</script>

<template>
	<div class="login-wrapper">
		<form @submit.prevent="login" class="login-form">
			<img :src="logo" />
			<h1>Benvenuto su AnimeTube</h1>
			<label for="email">Email / Username</label>
			<input v-model="username" name="email" type="text" placeholder="dev@animetube.com" required />
			<label for="password">Password</label>
			<input v-model="password" name="password" type="password" placeholder="******" required />
			<button class="login-button" type="submit">Entra</button>
			<p @click="router.push('/register')">Registrazione</p>
		</form>
	</div>
</template>

<style scoped>
.login-wrapper {
	width: 100%;
	height: max-content;
	margin: auto;
}

.login-form {
	width: 25%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: var(--bg-2);
	margin: auto;
	border-radius: 15px;
	padding: 25px;
}

.login-form *:not(label) {
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

.login-button {
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
	.login-form {
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
	.login-form {
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
	.login-form {
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
