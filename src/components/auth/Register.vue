<script setup>
import { useStore } from '../../store'
const store = useStore()
</script>

<template>
	<div class="register-wrapper">
		<form class="register-form">
			<input type="text" placeholder="Email / Username" />
			<input type="password" placeholder="Password" />
			<button type="button"></button>
		</form>
	</div>
</template>

<style scoped></style>
