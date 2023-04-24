<script setup>
import { useStore } from '../store'
const store = useStore()
</script>

<template>
	<div class="notfound-wrapper">
		<div class="notfound-content">
			<h1>NOT FOUND</h1>
			<img src="https://i.pinimg.com/originals/2f/b6/b9/2fb6b97352da3c0fbe939f85ea033955.webp" />
		</div>
	</div>
</template>

<style scoped>
.notfound-wrapper {
	height: calc(100vh - 60px);
	display: flex;
	flex-direction: column;
}

.notfound-content {
	text-align: center;
	width: max-content;
	margin: auto;
}
</style>
