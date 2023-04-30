<script setup>
defineProps({
	title: String,
	cover: String
})
</script>

<template>
	<div class="search-result-wrapper">
		<img class="result-img" :src="cover" />
		<p>{{ title }}</p>
	</div>
</template>

<style scoped>
.search-result-wrapper {
	display: flex;
	flex-direction: row;
	color: #000;
	align-items: center;
	overflow: hidden;
	width: calc(100% - 10px);
	border-bottom: 1px solid #000;
	color: var(--text);
	padding: 10px 0px 10px 10px;
}

p {
	text-align: center;
}

.result-img {
	width: 50px;
	object-fit: scale-down;
	margin-right: 10px;
	border-radius: 5px;
}
</style>
