<script setup>
import LoginPanel from '../components/auth/LoginPanel.vue'
import { useSessionStore } from '../stores/session'
import { useAPIStore } from '../stores/api'
const { API } = useAPIStore()
const session = useSessionStore()
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
