<script setup>
import { useAnimeStore } from '../../stores/anime'
const anime = useAnimeStore()
</script>

<template>
	<div class="anime-panel-wrapper">
		<h1 class="text-description">Trama</h1>
		<p>{{ anime.description }}</p>
	</div>
</template>

<style scoped>
.anime-panel-wrapper {
	background: var(--bg-4);
	flex-direction: row;
	margin-top: 20px;
	margin-right: 20px;
	border-radius: 20px;
	color: var(--text);
	padding: 20px;
}

.text-description {
	color: var(--text-2);
}
</style>
