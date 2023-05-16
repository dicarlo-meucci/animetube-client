<script setup>
import LoginPanel from '../components/auth/Login.vue'
import { useStore } from '../store'
const store = useStore()
</script>

<template>
	<div class="login-panel-wrapper">
		<LoginPanel />
	</div>
</template>

<style scoped>
.login-panel-wrapper {
	height: calc(90vh - 60px);
	display: flex;
	align-items: middle;
	justify-content: center;
}
</style>
