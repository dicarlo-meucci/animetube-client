<script setup>
import { useStore } from '../store'
import RegisterPanel from '../components/auth/Register.vue'
const store = useStore()
</script>

<template>
	<div class="register-panel-wrapper">
		<RegisterPanel />
	</div>
</template>

<style scoped>
.register-panel-wrapper {
	height: calc(90vh - 60px);
	display: flex;
	align-items: middle;
	justify-content: center;
}
</style>
