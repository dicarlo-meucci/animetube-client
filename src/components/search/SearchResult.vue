<script setup>
import { defineProps } from 'vue'
defineProps({
	term: String
})
</script>

<template>
	<div class="search-result-wrapper">
		<img
			class="result-img"
			src="https://external-preview.redd.it/Et7F1S67MA1k0pMKTvNLUQLvZo8Z2-3t8LHHqOTl924.jpg?auto=webp&s=ccce9fbdfd7621231650a3ce766d8356f8e9c667"
		/>
		<p>{{ term }}</p>
	</div>
</template>

<style scoped>
.search-result-wrapper {
	display: flex;
	flex-direction: row;
	color: #000;
	align-items: center;
	overflow: hidden;
	width: 100%;
	border-bottom: 1px solid #000;
	color: var(--text);
}

p {
	text-align: center;
}

.result-img {
	width: 50px;
	object-fit: scale-down;
	margin-right: 5px;
}
</style>
