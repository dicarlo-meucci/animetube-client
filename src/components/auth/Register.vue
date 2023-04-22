<script setup>
import { useStore } from '../../store'
import logo from '../../assets/at-logo.png'
import router from '../../router'
const store = useStore()
</script>

<template>
	<div class="register-wrapper">
		<form class="register-form">
			<img :src="logo" />
			<h1>Benvenuto su AnimeTube</h1>
			<label for="email">Email / Username</label>
			<input name="email" type="text" placeholder="balls@gmail.com" />
			<label for="password">Password</label>
			<input name="password" type="password" placeholder="******" />
			<button class="register-button" type="button">Registrati</button>
			<p @click="router.push('/login')">Login</p>
		</form>
	</div>
</template>

<style scoped>
.register-wrapper {
	width: 100%;
	height: max-content;
	margin: auto;
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
