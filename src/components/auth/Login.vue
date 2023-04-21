<script setup>
import { useStore } from '../../store'
import logo from '../../assets/at-logo.png'
const store = useStore()
</script>

<template>
	<div class="login-wrapper">
		<form class="login-form">
            <img :src="logo">
            <h1>Login</h1>
			<label for="email">Email / Username</label>
			<input name="email" type="text" placeholder="balls@gmail.com" />
			<label for="password">Password</label>
			<input name="password" type="password" placeholder="******" />
			<button class="login-button" type="button">Login</button>
		</form>
	</div>
</template>

<style scoped>
.login-wrapper {
	width: 50%;
	height: max-content;
	margin: auto;
}
.login-form {
	width: 20vw;
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
</style>
