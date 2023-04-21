<script setup>
import AnimeScore from './AnimeScore.vue'
</script>

<template>
	<div class="anime-panel-wrapper">
		<h1>Title</h1>
		<img class="key-visual" src="https://i.pinimg.com/550x/d1/32/91/d132910ab50a26f43fd29d5cf9bbf976.jpg" />
		<h1>Informations</h1>
		<AnimeScore></AnimeScore>
	</div>
</template>

<style scoped>
.anime-panel-wrapper {
	background: var(--bg-4);
	display: flex;
	flex-direction: column;
	margin: 20px;
	border-radius: 20px;
	height: 80%;
	color: var(--text-2);
	padding: 20px;
	width: 20%;
	text-align: center;
}

.anime-panel-wrapper * {
	margin: 5px;
}

.key-visual {
	width: 80%;
	object-fit: scale-down;
	border-radius: 10px;
	margin-right: auto;
	margin-left: auto;
}
</style>
