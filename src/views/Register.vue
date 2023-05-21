<script setup>
import RegisterPanel from '../components/auth/RegisterPanel.vue'
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
